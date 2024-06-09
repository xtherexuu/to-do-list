import React from "react";
import { Outlet, redirect } from "react-router-dom";
import { OutletWrapper, Wrapper } from "./styled";
import TasksInteractiveFooter from "../../Components/TasksInteractiveFooter";

export async function loader() {
  const isAuth = true;
  if (!isAuth) {
    throw redirect("/");
  }
  return null;
}

export default function TasksLayout() {
  return (
    <Wrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <TasksInteractiveFooter />
    </Wrapper>
  );
}
