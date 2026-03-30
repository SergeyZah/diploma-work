import axios from 'axios';
import { BASE_URL } from '../constants';
import { UserType } from '@/sharedTypes/types';

type signInTypeProp = {
  email: string;
  password: string;
};

type signInReturnType = {
  token: string;
};

type signUpTypeProp = {
  email: string;
  password: string;
};

type signUpReturnType = {
  message: string;
};

export const signIn = (data: signInTypeProp): Promise<signInReturnType> => {
  return axios
    .post(BASE_URL + '/api/fitness/auth/login', data, {
      headers: {
        'content-type': '',
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const signUp = (data: signUpTypeProp): Promise<signUpReturnType> => {
  return axios
    .post(BASE_URL + '/api/fitness/auth/register', data, {
      headers: {
        'content-type': '',
      },
    })
    .then((res) => {
      return res.data.message;
    });
};

export const getUserInfo = (token: string): Promise<UserType> => {
  return axios(BASE_URL + `/api/fitness/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data.user;
  });
};
