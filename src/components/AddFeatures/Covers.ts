export type CourseTheme = {
  courseImageSrc: string;
  BgcColor: string;
};

export const CoverCourse: Record<string, CourseTheme> = {
  Yoga: {
    courseImageSrc: '/img/yoga.png',
    BgcColor: '/images/courses/yoga-hero.png',
  },

  Stretching: {
    courseImageSrc: '/img/stretching.png',
    BgcColor: '/images/courses/stretching-hero.png',
  },

  Fitness: {
    courseImageSrc: '/img/fitness.png',
    BgcColor: '/images/courses/fitness-hero.png',
  },

  StepAirobic: {
    courseImageSrc: '/img/step.png',
    BgcColor: '/images/courses/step-hero.png',
  },

  BodyFlex: {
    courseImageSrc: '/img/bodyflex.png',
    BgcColor: '/images/courses/bodyflex-hero.png',
  },
};
