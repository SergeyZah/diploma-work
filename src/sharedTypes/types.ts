export type Difficulty = 'легкий' | 'средний' | 'сложный';

export type DailyDurationInMinutes = {
  from: number;
  to: number;
};

export type Course = {
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
