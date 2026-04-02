export type CourseTheme = {
  courseImageSrc: string;
  courseImageSrcLong: string;
  courseImageSrcMobile: string;
  color: string;
};

export const CoverCourse: Record<string, CourseTheme> = {
  Yoga: {
    courseImageSrc: '/img/yoga.png',
    courseImageSrcLong: '/img/yogaLong.png',
    courseImageSrcMobile: '/img/yoga.png',
    color: 'rgba(255, 199, 0, 1)',
  },

  Stretching: {
    courseImageSrc: '/img/stretching.png',
    courseImageSrcLong: '/img/stretchingLong.png',
    courseImageSrcMobile: '/img/stretchingMobile.png',
    color: 'rgba(36, 145, 210, 1)',
  },

  Fitness: {
    courseImageSrc: '/img/fitness.png',
    courseImageSrcLong: '/img/fitnessLong.png',
    courseImageSrcMobile: '/img/fitnessMobile.png',
    color: 'rgba(247, 160, 18, 1)',
  },

  StepAirobic: {
    courseImageSrc: '/img/step.png',
    courseImageSrcLong: '/img/stepLong.png',
    courseImageSrcMobile: '/img/stepMobile.png',
    color: 'rgba(255, 126, 101, 1)',
  },

  BodyFlex: {
    courseImageSrc: '/img/bodyflex.png',
    courseImageSrcLong: '/img/bodyflexLong.png',
    courseImageSrcMobile: '/img/bodyflexMobile.png',
    color: 'rgba(125, 69, 140, 1)',
  },
};
