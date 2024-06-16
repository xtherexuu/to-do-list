import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import createSagaMiddleware from "redux-saga";
import tasksSlice from "./tasksSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { user: userSlice, tasks: tasksSlice },
  middleware: (getDeafultMiddleware) =>
    getDeafultMiddleware().concat(sagaMiddleware),
});

export default store;
