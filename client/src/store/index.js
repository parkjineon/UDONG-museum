import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // user와 관련된 state는 persistent함
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({ reducer: persistedReducer });

export default store;
