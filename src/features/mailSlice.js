import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",

  initialState: { selectedMail: null, sendMessageIsOpen: false },

  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    sendMessageOpen: (state) => {
      state.sendMessageIsOpen = true;
    },
    sendMessageClose: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const openSelectedMail = (state) => state.mail.selectedMail;
export const { sendMessageClose, sendMessageOpen, selectMail } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
