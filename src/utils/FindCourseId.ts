import { CourseType } from '@/sharedTypes/types';
import { useAppSelector } from '@/store/store';

export function findCourseId(courseId: string): CourseType | undefined {
  const { allCourses } = useAppSelector((state) => state.courses);
  return allCourses.find((course) => (course._id = courseId));
}
