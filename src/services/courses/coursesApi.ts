import axios from 'axios';
import { CourseType } from '@/sharedTypes/types';
import { BASE_URL } from '../constants';

export const getAllCourses = (): Promise<CourseType[]> => {
  return axios(BASE_URL + '/api/fitness/courses').then((res) => {
    return res.data;
  });
};

export const getCourseCardInfo = (id: string): Promise<CourseType> => {
  return axios(BASE_URL + `/api/fitness/courses/${id}`).then((res) => {
    return res.data;
  });
};
