import { setToken, setUsername } from '@/store/features/AuthSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useInitAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const username = localStorage.getItem('username') || '';

    dispatch(setToken(token));
    dispatch(setUsername(username));
  }, [dispatch]);
};
