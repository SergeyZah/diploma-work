'use client';

import Centerblock from '@/components/Centerblock/Centerblock';
import { getAllCourses } from '@/services/courses/coursesApi';
import { CourseType } from '@/sharedTypes/types';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res);
    });
  }, []);

  return (
    <div>
      <Centerblock courseList={courses} />
    </div>
  );
}
