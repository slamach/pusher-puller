import { createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import transactionsAddress from 'contracts/Transactions-contract-address.json';
import transactionsArtifact from 'contracts/Transactions.json';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    account: null,
    balance: null,
    transactions: null,
    notification: null,
    notificationStatus: false,
    notificationTimer: null,
  },
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    unshiftTransaction: (state, action) => {
      if (!state.transactions) {
        return;
      }
      if (state.transactions.length >= 8) {
        state.transactions.pop();
      }
      state.transactions.unshift(action.payload);
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
    setNotificationStatus: (state, action) => {
      state.notificationStatus = action.payload;
    },
    setNotificationTimer: (state, action) => {
      state.notificationTimer = action.payload;
    },
    resetConnection: (state, action) => {
      state.account = null;
      state.balance = null;
      state.transactions = null;
      state.notification = null;
      state.notificationStatus = null;
      state.notificationTimer = null;
    },
  },
});

export default appSlice.reducer;

const { ethereum } = window;
const DEPLOY_NETWORK_ID = '1337';
const ERROR_CODE_REJECTED_BY_USER = 4001;
const NOTIFICATION_DURATION = 5000;

export const triggerNotification =
  (notificationContent) => async (dispatch, getState) => {
    const currentTimer = getState().app.notificationTimer;
    if (currentTimer) {
      clearTimeout(currentTimer);
    }
    dispatch(appSlice.actions.setNotification(notificationContent));
    dispatch(appSlice.actions.setNotificationStatus(true));
    const newTimer = setTimeout(
      () => dispatch(appSlice.actions.setNotificationStatus(false)),
      NOTIFICATION_DURATION
    );
    dispatch(appSlice.actions.setNotificationTimer(newTimer));
  };

const checkWallet = () => ethereum;

const checkNetwork = async () =>
  (await ethereum.request({ method: 'net_version' })) === DEPLOY_NETWORK_ID;

const handleAccountChanged = (account) => async (dispatch, getState) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const balance = (await provider.getBalance(account)).toString();
  dispatch(appSlice.actions.setAccount(account));
  dispatch(appSlice.actions.setBalance(balance));
};

const initializeAccounts = () => async (dispatch, getState) => {
  const [account] = await ethereum.request({
    method: 'eth_accounts',
  });

  if (account) {
    dispatch(handleAccountChanged(account));
    dispatch(getTransactionHistory());
  }
};

export const initializeConnection = () => async (dispatch, getState) => {
  if (!checkWallet()) {
    return;
  }

  if (await checkNetwork()) {
    dispatch(initializeAccounts());
  }

  window.ethereum.on('accountsChanged', ([newAccount]) => {
    if (!newAccount) {
      console.log(123);
      dispatch(appSlice.actions.resetConnection());
    }
    dispatch(handleAccountChanged(newAccount));
  });
  window.ethereum.on('chainChanged', async (networkId) => {
    dispatch(appSlice.actions.resetConnection());
    if (await checkNetwork(Number(networkId).toString())) {
      dispatch(initializeAccounts());
    }
  });

  const provider = new ethers.providers.Web3Provider(ethereum);
  const transactionsContract = new ethers.Contract(
    transactionsAddress.Transactions,
    transactionsArtifact.abi,
    provider.getSigner()
  );

  const startBlockNumber = await provider.getBlockNumber();
  transactionsContract.on('TransactionAdded', (...args) => {
    const event = args[args.length - 1];
    if (event.blockNumber <= startBlockNumber) {
      return;
    }
    dispatch(
      appSlice.actions.unshiftTransaction({
        sender: args[0],
        reciever: args[1],
        amount: args[2].toString(),
        message: args[3],
        keyword: args[4],
      })
    );
  });
};

export const connectWallet = () => async (dispatch, getState) => {
  if (!checkWallet()) {
    dispatch(
      triggerNotification(
        'No Ethereum wallet was detected. Please install Metamask.'
      )
    );
    return;
  }

  if (!(await checkNetwork())) {
    dispatch(triggerNotification('Please connect wallet to Localhost:8545.'));
    return;
  }

  try {
    const [account] = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    dispatch(handleAccountChanged(account));
    dispatch(getTransactionHistory());
  } catch (error) {
    switch (error.code) {
      case ERROR_CODE_REJECTED_BY_USER:
        break;
      default:
        dispatch(triggerNotification('Unexpected error from Metamask.'));
    }
  }
};

export const getTransactionHistory = () => async (dispatch, getState) => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const transactionsContract = new ethers.Contract(
      transactionsAddress.Transactions,
      transactionsArtifact.abi,
      provider.getSigner()
    );
    const transactionHistory =
      await transactionsContract.getTransactionHistory();
    dispatch(
      appSlice.actions.setTransactions(
        transactionHistory
          .map((item) => {
            return {
              sender: item.sender,
              reciever: item.reciever,
              amount: item.amount.toString(),
              message: item.message,
              keyword: item.letword,
            };
          })
          .reverse()
          .slice(0, 8)
      )
    );
  } catch (error) {
    switch (error.code) {
      default:
        dispatch(triggerNotification('Unexpected error from smart contract.'));
    }
  }
};

export const addTransaction =
  (value, reciever, message, keyword) => async (dispatch, getState) => {
    if (!getState().app.account) {
      dispatch(triggerNotification('Please connect Metamask account.'));
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const transactionsContract = new ethers.Contract(
        transactionsAddress.Transactions,
        transactionsArtifact.abi,
        provider.getSigner()
      );
      const tx = await transactionsContract.addTransaction(
        reciever,
        message,
        keyword,
        {
          value: ethers.utils.parseEther(value),
        }
      );
      await tx.wait();
      dispatch(
        appSlice.actions.setBalance(
          (await provider.getBalance(getState().app.account)).toString()
        )
      );
      dispatch(
        triggerNotification('Transaction was successfully added to blockchain.')
      );
    } catch (error) {
      switch (error.code) {
        case ERROR_CODE_REJECTED_BY_USER:
          break;
        default:
          dispatch(triggerNotification('Unexpected error from Metamask.'));
      }
    }
  };
