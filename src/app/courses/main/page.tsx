'use client';

import Centerblock from '@/components/Centerblock/Centerblock';
import { getAllCourses } from '@/services/courses/coursesApi';
import { CourseType } from '@/sharedTypes/types';
import { useAppSelector } from '@/store/store';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const { allCourses } = useAppSelector((state) => state.courses);

  return (
    <div>
      <Centerblock courseList={allCourses} />
    </div>
  );
}
