"use strict";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const typeCreateUser = "auth/createUser";
const typeLoginUser = "auth/login";
interface createUserProps {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const createUser = createAsyncThunk(
  typeCreateUser,
  async (data: createUserProps) => {
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        data
      );
      const dataj = await response.data;
      return dataj;
    } catch (error) {
      throw error;
    }
  }
);

interface loginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  typeLoginUser,
  async (data: loginProps) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        data
      );
      const resData = await response.data;
      console.log(resData);
      return resData;
    } catch (error) {
      throw error;
    }
  }
);
interface userProps {
  email: string;
  name: string;
  role: string;
}
export const getUsers = createAsyncThunk(
  "getUser/get",
  async (data: userProps) => {
    try {
      const response = await axios.get("http://localhost:4000/api/auth/users");
      const resData = await response.data;
      return resData;
    } catch (error) {
      throw error;
    }
  }
);

interface initialStateProps {
  isLoading: boolean;
  user: any;
  error: number | null;
}

const initialState: initialStateProps = {
  isLoading: false,
  user: {
    _id: "",
    name: "",
    email: "",
    role: "",
  },
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as number;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user.user;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as number;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as number;
    });
  },
});

export default authSlice.reducer;
