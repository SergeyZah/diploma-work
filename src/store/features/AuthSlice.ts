import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  username: string;
  token: string;
};

const initialState: initialStateType = {
  username: '',
  token: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('access', action.payload);
    },
    clearUser: (state) => {
      state.username = '';
      state.token = '';
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
  },
});

export const { setUsername, setToken, clearUser } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
