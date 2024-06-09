import React from "react";
import { AddTaskButton, StyledNavLink, Wrapper } from "./styled";
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaPlus, FaRegUser, FaTasks, FaUser } from "react-icons/fa";
import { MdFolder, MdFolderOpen } from "react-icons/md";

export default function TasksInteractiveFooter() {
  return (
    <Wrapper>
      <StyledNavLink to="/tasks" end>
        <GoHome />
        <GoHomeFill className="svg--active" />
      </StyledNavLink>
      <StyledNavLink to="/tasks/all" end>
        <FaTasks className="svg--alwaysActive" />
      </StyledNavLink>
      <AddTaskButton>
        <FaPlus />
      </AddTaskButton>
      <StyledNavLink to="/tasks/tabs" end>
        <MdFolderOpen />
        <MdFolder className="svg--active" />
      </StyledNavLink>
      <StyledNavLink to="/tasks/user" end>
        <FaRegUser />
        <FaUser className="svg--active" />
      </StyledNavLink>
    </Wrapper>
  );
}
