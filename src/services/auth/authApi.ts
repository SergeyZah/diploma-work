import axios from 'axios';
import { BASE_URL } from '../constants';

type signInTypeProp = {
  email: string;
  password: string;
};

type signInReturnType = {
  data: {
    email: string;
    username: string;
    _id: number | string;
  };
};

export const signIn = (data: signInTypeProp): Promise<signInReturnType> => {
  return axios.post(BASE_URL + '/user/login/', data, {
    headers: {
      'content-type': 'application/json',
    },
  });
};
