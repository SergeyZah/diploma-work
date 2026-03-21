import Centerblock from '@/components/Centerblock/Centerblock';
import Header from '@/components/Header/Header';
import styles from './page.module.css';
import AuthModal from '@/components/AuthModal/AuthModal';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Centerblock />
      <AuthModal />
    </div>
  );
}
