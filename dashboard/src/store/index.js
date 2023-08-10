import { configureStore } from "@reduxjs/toolkit";
import { mainApiSlice } from "./slices/mainApiSlice";

export const store = configureStore({
  reducer: {
    [mainApiSlice.name]: mainApiSlice.reducer
  },
});


export {Init} from "./slices/mainApiSlice"