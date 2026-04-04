import axios from 'axios';
import { CourseType, WorksType } from '@/sharedTypes/types';
import { BASE_URL } from '../constants';

type addUserCourseReturnType = {
  message: string;
};

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

export const addUserCourse = (
  token: string,
  courseId: string,
): Promise<addUserCourseReturnType> => {
  return axios
    .post(
      BASE_URL + `/api/fitness/users/me/courses`,
      { courseId: courseId },
      {
        headers: {
          'content-type': '',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((res) => {
      return res.data;
    });
};

export const removeUserCourse = (
  token: string,
  courseId: string,
): Promise<addUserCourseReturnType> => {
  return axios
    .delete(BASE_URL + `/api/fitness/users/me/courses/${courseId}`, {
      headers: {
        'content-type': '',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
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
