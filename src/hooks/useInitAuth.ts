'use client';

import { getUserInfo } from '@/services/auth/authApi';
import { setToken, setUser } from '@/store/features/AuthSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useInitAuth = () => {
  const dispatch = useDispatch();
  console.log('Работает useInitAuth');

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    // const user = JSON.parse(localStorage.getItem('user') || '');

    dispatch(setToken(token));
    // dispatch(setUser(user));

    getUserInfo(token).then((response) => {
      dispatch(setUser(response));
    });
  }, [dispatch]);
};
