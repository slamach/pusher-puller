import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
