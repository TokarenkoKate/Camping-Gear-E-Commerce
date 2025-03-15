import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { UserSchema } from "../types/user-schema";

const initialState: UserSchema = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
