import { configureStore } from "@reduxjs/toolkit";
import twitReducer from "./twitSlice";

export default configureStore({
  reducer: {
    twit: twitReducer,
  },
});
