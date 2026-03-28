import { useAppDispatch, useAppSelector } from '@/store/store';

export default function FetchingCourses() {
  const dispatch = useAppDispatch();
  const { allCourses } = useAppSelector((state) => state.courses);
}
