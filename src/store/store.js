import { configureStore } from "@reduxjs/toolkit";
import ModalReduce from "../features/modalSlicer";
const store = configureStore({
  reducer: { ModalReduce },
});

export default store;
