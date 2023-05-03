import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slider: '',
  contact: [],
  contactDetail: {},
  notif: [],
};

const Reducer = createSlice({
  name: 'reduce',
  initialState,
  reducers: {
    Slider(state, action) {
      state.slider = action.payload;
    },
    Contact(state, action) {
      state.contact = action.payload;
    },
    ContactDetails(state, action) {
      state.contactDetail = action.payload;
    },
  },
});
export const { Slider, Contact, ContactDetails } = Reducer.actions;
const MainReducer = Reducer.reducer;

export default MainReducer;
