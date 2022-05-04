import { createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
// import transactionsAddress from 'contracts/Transactions-contract-address.json';
// import transactionsArtifact from 'contracts/Transactions.json';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    account: null,
    balance: null,
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
  // const transactionsContract = new ethers.Contract(
  //   transactionsAddress.Transactions,
  //   transactionsArtifact.abi,
  //   provider.getSigner()
  // );

  dispatch(appSlice.actions.setAccount(account));
  dispatch(appSlice.actions.setBalance(balance));
};

export const initializeConnection = () => async (dispatch, getState) => {
  if (!checkWallet()) {
    dispatch(
      triggerNotification(
        'No Ethereum wallet was detected. Please install Metamask.'
      )
    );
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
        dispatch(triggerNotification('Please connect Metamask account.'));
        break;
      default:
        dispatch(triggerNotification('Unexpected error from Metamask.'));
    }
  }
};
