import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './alertSlice';
import notesReducer from './notesSlice';

export default configureStore({
  reducer: {
    alert: alertReducer,
    notes: notesReducer,
  },
});
