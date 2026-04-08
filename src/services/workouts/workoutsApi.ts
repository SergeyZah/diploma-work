import axios from 'axios';
import { WorkoutProgressType, WorksType } from '@/sharedTypes/types';
import { BASE_URL } from '../constants';

export const getWorkautInfo = (
  token: string,
  workautId: string,
): Promise<WorksType> => {
  return axios(BASE_URL + `/api/fitness/workouts/${workautId}`, {
    headers: {
      'content-type': '',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data;
  });
};

export const getCourseWorkouts = (
  token: string,
  courseId: string,
): Promise<WorksType[]> => {
  return axios(BASE_URL + `/api/fitness/courses/${courseId}/workouts`, {
    headers: {
      'content-type': '',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data;
  });
};
