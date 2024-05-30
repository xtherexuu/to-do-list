import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { user: userSlice },
  middleware: (getDeafultMiddleware) =>
    getDeafultMiddleware().concat(sagaMiddleware),
});

export default store;
