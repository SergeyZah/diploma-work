import Centerblock from '@/components/Centerblock/Centerblock';
import Header from '@/components/Header/Header';
import styles from './page.module.css';
import AuthModal from '@/components/AuthModal/AuthModal';
import FitnessCourse from '@/components/FitnessCourse/FitnessCourse';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <FitnessCourse />
    </div>
  );
}
