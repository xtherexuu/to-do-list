import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import TasksLayout, {
  loader as tasksLayoutLoader,
} from "./Layouts/TasksLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
      <Route
        path="tasks"
        element={<TasksLayout />}
        loader={tasksLayoutLoader}
      />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
