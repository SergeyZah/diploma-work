import { getUserInfo } from '@/services/auth/authApi';
import { setToken, setUser } from '@/store/features/AuthSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useInitAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const userEmail = JSON.parse(localStorage.getItem('user') || '');

    dispatch(setToken(token));
    dispatch(setUser(userEmail));

    getUserInfo(token).then((response) => {
      dispatch(setUser(response));
    });
  }, [dispatch]);
};
