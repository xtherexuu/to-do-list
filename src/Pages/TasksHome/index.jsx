import React, { useRef, useState } from "react";
import TasksSection from "../../Components/TasksSection";
import {
  AddTaskButton,
  AddTaskForm,
  AddTaskInput,
  AddTaskInputLabel,
  Header,
  HeaderHeading,
  HeaderWelcome,
  LastAddedTaskHeading,
  LastAddedTasks,
  LastAddedTasksContainer,
  LastAddedTasksHeader,
  SeeAllTasksButton,
  Wrapper,
} from "./styled";
import Task from "../../Components/Task";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTasks } from "../../../features/tasksSlice";

export default function TasksHome() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [taskContent, setTaskContent] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    if (taskContent.trim()) {
      dispatch(addTask({ content: taskContent.trim() }));
      setTaskContent("");
      inputRef.current.focus();
    } else {
      setTaskContent("");
      inputRef.current.focus();
    }
  }

  return (
    <TasksSection heading="TasksHarmony">
      <Wrapper>
        <Header>
          <HeaderWelcome>
            Hello <b>UserName!</b> 👋
          </HeaderWelcome>
          <HeaderHeading>Manage Your Daily Tasks</HeaderHeading>
        </Header>
        <AddTaskForm onSubmit={onFormSubmit}>
          <AddTaskInputLabel>
            Add quick task
            <AddTaskInput
              ref={inputRef}
              name="taskContent"
              placeholder="What needs to be done? 💭"
              type="text"
              value={taskContent}
              onChange={({ target }) => setTaskContent(target.value)}
            />
          </AddTaskInputLabel>
          <AddTaskButton>Add Task</AddTaskButton>
        </AddTaskForm>
        <LastAddedTasksContainer>
          <LastAddedTasksHeader>
            <LastAddedTaskHeading>Last added</LastAddedTaskHeading>
            <SeeAllTasksButton>See all</SeeAllTasksButton>
          </LastAddedTasksHeader>
          <LastAddedTasks>
            {[...tasks]
              .sort(function (a, b) {
                return b.createDate - a.createDate;
              })
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </LastAddedTasks>
        </LastAddedTasksContainer>
      </Wrapper>
    </TasksSection>
  );
}
