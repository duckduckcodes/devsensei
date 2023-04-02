import { configureStore } from '@reduxjs/toolkit';
import fileSlice from './features/fileSlice';
import tabSlice from './features/tabSlice';

const store = configureStore({
  reducer: {
    files: fileSlice,
    tabs: tabSlice
  }
});

export default store;