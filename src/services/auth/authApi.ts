import axios from 'axios';
import { BASE_URL } from '../constants';

type signInTypeProp = {
  email: string;
  password: string;
};

type signInReturnType = {
  message: string;
};

type signUpTypeProp = {
  email: string;
  password: string;
};

type signUpReturnType = {
  token: string;
};

export const signIn = (data: signInTypeProp): Promise<signInReturnType> => {
  return axios.post(BASE_URL + '/api/fitness/auth/login', data, {
    headers: {
      'content-type': '',
    },
  });
};

export const signUp = (data: signUpTypeProp): Promise<signUpReturnType> => {
  return axios.post(BASE_URL + '/api/fitness/auth/register', data, {
    headers: {
      'content-type': '',
    },
  });
};
