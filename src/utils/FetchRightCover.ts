import { CourseTheme, CoverCourse } from '@/components/AddFeatures/Covers';

export function FetchRightCover(courseName: string): CourseTheme {
  return CoverCourse[courseName];
}
