import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      createDate: new Date(2024, 5, 12, 12, 30, 30, 320).getTime(),
      content: "Zrobić pyszny obiad!",
      done: false,
      date: new Date(2024, 10, 2).getTime(),
      priority: "High",
      subtasks: [
        {
          id: 1,
          content: "Kupić przyprawy",
          done: false,
        },
        {
          id: 2,
          content: "Zrobić sos",
          done: false,
        },
        {
          id: 3,
          content: "Wstawić na patelnie",
          done: false,
        },
      ],
    },
    {
      id: 2,
      createDate: new Date(2024, 5, 13, 13, 30, 30, 320).getTime(),
      content: "Wyprowadzić psa na najpiękniejszy spacer marzeń tak właśnie!",
      done: false,
      date: new Date().getTime(),
      priority: "Medium",
      subtasks: [
        {
          id: 1,
          content: "Ubrać psa w smycz",
          done: true,
        },
        {
          id: 2,
          content: "Wyjść z psem",
          done: true,
        },
        {
          id: 3,
          content: "Wrócić do domu",
          done: false,
        },
      ],
    },
    {
      id: 3,
      createDate: new Date(2024, 5, 12, 14, 30, 30, 320).getTime(),
      content: "Napisać super program!",
      done: false,
      date: null,
      priority: null,
      subtasks: [],
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const task = {
        id: nanoid(),
        done: false,
        createDate: new Date().getTime(),
        date: null,
        priority: null,
        subtasks: [],
        ...payload,
      };
      state.tasks.push(task);
    },
    deleteTask: (state, { payload }) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === payload);
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    toggleTaskDone: (state, { payload }) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === payload);
      state.tasks[taskIndex].done = !state.tasks[taskIndex].done;
    },
    toggleSubtaskDone: (state, { payload }) => {
      const taskIndex = state.tasks.findIndex((t) => t.id === payload.taskId);
      const subtaskIndex = state.tasks[taskIndex].subtasks.findIndex(
        (s) => s.id === payload.subtaskId
      );
      state.tasks[taskIndex].subtasks[subtaskIndex].done =
        !state.tasks[taskIndex].subtasks[subtaskIndex].done;
    },
  },
});

export const { addTask, toggleTaskDone, deleteTask } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;
