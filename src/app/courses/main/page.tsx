'use client';

import Centerblock from '@/components/Centerblock/Centerblock';
import { useAppSelector } from '@/store/store';

export default function MainPage() {
  const { allCourses } = useAppSelector((state) => state.courses);

  return (
    <div>
      <Centerblock courseList={allCourses} />
    </div>
  );
}
