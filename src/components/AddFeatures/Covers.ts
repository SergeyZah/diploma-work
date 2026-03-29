export type CourseTheme = {
  courseImageSrc: string;
  courseImageSrcLong: string;
};

export const CoverCourse: Record<string, CourseTheme> = {
  Yoga: {
    courseImageSrc: '/img/yoga.png',
    courseImageSrcLong: '/img/yogaLong.png',
  },

  Stretching: {
    courseImageSrc: '/img/stretching.png',
    courseImageSrcLong: '/img/stretchingLong.png',
  },

  Fitness: {
    courseImageSrc: '/img/fitness.png',
    courseImageSrcLong: '/img/fitnessLong.png',
  },

  StepAirobic: {
    courseImageSrc: '/img/step.png',
    courseImageSrcLong: '/img/stepLong.png',
  },

  BodyFlex: {
    courseImageSrc: '/img/bodyflex.png',
    courseImageSrcLong: '/img/bodyflexLong.png',
  },
};
