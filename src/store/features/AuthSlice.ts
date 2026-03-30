import { UserType } from '@/sharedTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  user: UserType | null;
  token: string;
};

const initialState: initialStateType = {
  user: null,
  token: '',
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
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
  },
});

export const { setUser, setToken, clearUser } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
