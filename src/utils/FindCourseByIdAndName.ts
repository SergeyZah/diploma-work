import { data } from '@/data';
import { CourseType } from '@/sharedTypes/types';

export function FindCourseByIdAndName(
  courseId: string,
): CourseType | undefined {
  return data.find((course) => (course._id = courseId));
}
