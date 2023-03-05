import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "vfv",
  type: "success",
  visibility: "hidden"
}

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, {payload}) => {
      state.value = payload.value;
      state.type = payload.type;
      state.visibility = payload.visibility;
    }
  }
})

const selectAlertState = (state) => state.alert;

export const { actions } = alertSlice;
export { selectAlertState };

export default alertSlice.reducer;
