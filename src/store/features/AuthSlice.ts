import { UserType } from '@/sharedTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  user: UserType | null;
  token: string;
  userName: string;
};

const initialState: initialStateType = {
  user: null,
  token: '',
  userName: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    clearUser: (state) => {
      state.user = null;
      state.token = '';
      state.userName = '';
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      localStorage.setItem('userName', action.payload);
    },
  },
});

export const { setUser, setToken, clearUser, setUserName } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
