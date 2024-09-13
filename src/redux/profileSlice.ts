import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string;
  email: string;
  bio: string;
  picture: string | null;
}

const initialState: ProfileState = {
  name: "",
  email: "",
  bio: "",
  picture: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<ProfileState>) => {
      return action.payload;
    },
    resetProfile: () => initialState,
  },
});

export const { updateProfile, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
