import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    info: null,
    openModal: false,
  },
  reducers: {
    addInfo: (state, action) => {
      return { ...state, info: action.payload };
    },
    onOffModal: (state, action) => {
      return {
        ...state,
        openModal: action.payload,
      };
    },
  },
});

export const { addInfo, onOffModal } = modalSlice.actions;
export const getInfo = (state) => state.ModalReduce.info;
export const getOnOffModal = (state) => state.ModalReduce.openModal;
export default modalSlice.reducer;
