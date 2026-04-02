export type Difficulty = 'начальный' | 'средний' | 'сложный';

export type DailyDurationInMinutes = {
  from: number;
  to: number;
};

export type CourseType = {
  _id: string;
  nameRU: string;
  nameEN: string;
  description: string;
  directions: string[];
  fitting: string[];
  difficulty: Difficulty;
  durationInDays: number;
  dailyDurationInMinutes: DailyDurationInMinutes;
  workouts: string[];
  order: number;
};

export type UserType = {
  _id: string;
  email: string;
  password: string;
  selectedCourses: string[];
  courseProgress: string[];
};

export type ExercisesType = {
  name: string;
  quantity: number;
  _id: string;
};

export type WorksType = {
  _id: string;
  name: string;
  video: string;
  exercises: ExercisesType[];
};
