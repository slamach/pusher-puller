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
    addTransaction: (state, action) => {
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
export const { setAccount, setBalance, resetConnection } = appSlice.actions;

const { ethereum } = window;
const ERROR_CODE_REJECTED_BY_USER = 4001;
const NOTIFICATION_DURATION = 5000;

const triggerNotification =
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

const handleAccountChanged = (account) => async (dispatch, getState) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const balance = (await provider.getBalance(account)).toString();

  if (!getState().app.account) {
    dispatch(getTransactionHistory());
  }

  dispatch(appSlice.actions.setAccount(account));
  dispatch(appSlice.actions.setBalance(balance));
};

export const initializeConnection = () => async (dispatch, getState) => {
  if (!checkWallet()) {
    return;
  }

  const [account] = await ethereum.request({
    method: 'eth_accounts',
  });

  if (account) {
    dispatch(handleAccountChanged(account));
  }

  window.ethereum.on('accountsChanged', ([newAccount]) => {
    if (!newAccount) {
      dispatch(appSlice.actions.resetConnection());
    }

    dispatch(handleAccountChanged(newAccount));
  });
  window.ethereum.on('chainChanged', ([networkId]) => {
    dispatch(appSlice.actions.resetConnection());
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

  try {
    const [account] = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    dispatch(handleAccountChanged(account));
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
      await transactionsContract.addTransaction(reciever, message, keyword, {
        value: ethers.utils.parseEther(value),
      });
      dispatch(
        triggerNotification('Transaction was successfully added to blockchain.')
      );
    } catch (error) {
      switch (error.code) {
        case ERROR_CODE_REJECTED_BY_USER:
          break;
        default:
          console.log(error);
          dispatch(triggerNotification('Unexpected error from Metamask.'));
      }
    }
  };
