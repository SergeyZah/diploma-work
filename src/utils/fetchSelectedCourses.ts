import { CourseType } from '@/sharedTypes/types';

export function fetchSelectedCourses(
  allCourse: CourseType[],
  coursesId: string[],
) {
  const selectedCourses = allCourse.filter((course) =>
    coursesId.includes(course._id),
  );
  return selectedCourses;
}
