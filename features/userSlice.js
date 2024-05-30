import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    loggIn: (state) => {
      return state;
    },
  },
});

export default userSlice.reducer;