import React from "react";
import {
  ManageTaskContainer,
  TaskButton,
  TaskContent,
  TaskDate,
  TaskDateContainer,
  TaskPriority,
  TaskProgressBar,
  TaskProgressContainer,
  TaskProgressPercentage,
  Wrapper,
} from "./styled";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { MdDone, MdOutlineTimer } from "react-icons/md";
import useGetProgress from "../../../hooks/useGetProgress";
import useGetDate from "../../../hooks/useGetDate";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskDone } from "../../../features/tasksSlice";

export default function Task({ task }) {
  const progress = useGetProgress(task.subtasks);
  const date = useGetDate(task.date);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {task.priority ? (
        <TaskPriority priority={task.priority}>{task.priority}</TaskPriority>
      ) : null}
      {progress ? (
        <TaskProgressContainer>
          <TaskProgressBar progress={progress} />
          <TaskProgressPercentage>{progress * 100}%</TaskProgressPercentage>
        </TaskProgressContainer>
      ) : null}
      <TaskContent isDone={task.done}>{task.content}</TaskContent>
      {date ? (
        <TaskDateContainer clockColor={date.color}>
          <MdOutlineTimer />
          <TaskDate>{date.date}</TaskDate>
        </TaskDateContainer>
      ) : null}
      <ManageTaskContainer>
        <TaskButton
          onClick={() => {
            dispatch(deleteTask(task.id));
          }}
        >
          <FaRegTrashAlt />
        </TaskButton>
        <TaskButton>
          <FaRegEye />
        </TaskButton>
        <TaskButton
          isDone={task.done}
          onClick={() => {
            dispatch(toggleTaskDone(task.id));
          }}
        >
          <MdDone />
        </TaskButton>
      </ManageTaskContainer>
    </Wrapper>
  );
}
