import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    selectedUser: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { setName, setSelectedUser } = UserSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectSelectedUser = (state) => state.user.selectedUser;
export default UserSlice.reducer;
