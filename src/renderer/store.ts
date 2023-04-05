import { configureStore } from '@reduxjs/toolkit';
import fileSlice from './features/fileSlice';
import tabSlice from './features/tabSlice';
import variableSlice from './features/variableSlice';

const store = configureStore({
  reducer: {
    files: fileSlice,
    tabs: tabSlice,
    variables: variableSlice
  }
});

export default store;