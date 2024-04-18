import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  name: string;
}

const initialState: UserState = {
  name: "Sulhadin",
  email: "sulhadin@gmail.com",
} as const;

export const userSlice = createSlice({
 
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setName, setEmail } = userSlice.actions;

export default userSlice.reducer;
