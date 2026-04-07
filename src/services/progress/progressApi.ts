import axios from 'axios';
import { CourseProgressType, WorkoutProgressType } from '@/sharedTypes/types';
import { BASE_URL } from '../constants';

type saveWorkoutProgressReturnType = {
  message: string;
};

type removeWorkoutProgressReturnType = {
  message: string;
};

type removeCourseProgressReturnType = {
  message: string;
};

export const getWorkoutProgress = (
  token: string,
  courseId: string,
  workautId: string,
): Promise<WorkoutProgressType> => {
  return axios(
    BASE_URL +
      `/api/fitness/users/me/progress?courseId=${courseId}&workoutId=${workautId}`,
    {
      headers: {
        'content-type': '',
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => {
    return res.data;
  });
};

export const saveWorkoutProgress = (
  token: string,
  courseId: string,
  workautId: string,
  progressData: number[],
): Promise<void | { message: string }> => {
  return axios
    .patch(
      BASE_URL + `/api/fitness/courses/${courseId}/workouts/${workautId}`,
      JSON.stringify({ progressData }),
      {
        headers: {
          'content-type': '',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });
};

export const removeWorkoutProgress = (
  token: string,
  courseId: string,
  workautId: string,
): Promise<removeWorkoutProgressReturnType> => {
  return axios
    .patch(
      BASE_URL + `/api/fitness/courses/${courseId}/workouts/${workautId}/reset`,
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

export const getCourseProgress = (
  token: string,
  courseId: string,
): Promise<CourseProgressType> => {
  return axios(
    BASE_URL + `/api/fitness/users/me/progress?courseId=${courseId}`,
    {
      headers: {
        'content-type': '',
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => {
    return res.data;
  });
};

export const removeCourseProgress = (
  token: string,
  courseId: string,
): Promise<removeCourseProgressReturnType> => {
  return axios
    .patch(BASE_URL + `/api/fitness/courses/${courseId}/reset`, {
      headers: {
        'content-type': '',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};
