'use client';

import { getUserInfo } from '@/services/auth/authApi';
import { setToken, setUser, setUserName } from '@/store/features/AuthSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useInitAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName') || '';
    if (token) {
      dispatch(setToken(token));
      getUserInfo(token).then((res) => {
        dispatch(setUser(res));
      });
    } else {
      console.log('Токен не передался');
    }
    dispatch(setUserName(userName));
  }, [dispatch]);
};
