'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to the Decision-Making System</h1>
      <p className={styles.description}>Manage your projects, questions, and users seamlessly.</p>
      <div className={styles.links}>
        <button onClick={() => router.push('/projects')} className={styles.button}>
          View Projects
        </button>
        <button onClick={() => router.push('/questions')} className={styles.button}>
          Manage Questions
        </button>
        <button onClick={() => router.push('/users/login')} className={styles.button}>
          User Login
        </button>
      </div>
    </div>
  );
}
