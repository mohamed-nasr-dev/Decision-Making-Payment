'use client';

import { useRouter } from 'next/navigation';
import styles from './ashboard.module.css';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <button className={styles.sidebarButton}  onClick={() => router.push('/user')}>
          Users
        </button>
        {/* <button className={styles.sidebarButton} onClick={() => router.push('/questions')}>
          Questions
        </button> */}
        <button className={styles.sidebarButton} onClick={() => router.push('/projects')}>
          Projects
        </button>
        <button className={styles.sidebarButton} onClick={() => router.push('/scammers')}>
          Scammers
        </button>
        {/* <button className={styles.sidebarButton} onClick={() => router.push('/about')}>
          About
        </button>
        <button className={styles.sidebarButton} onClick={() => router.push('/setting')}>
          setting
        </button> */}
        <button className={styles.sidebarButton} onClick={() => router.push('/question')}>
          question
        </button>
        <button className={styles.sidebarButton} onClick={() => router.push('/users/logout')}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h1>Payment Information</h1>
        <p>
          Welcome to the payment management system. Here you can manage all payment-related
          tasks, view transaction histories, and ensure accurate financial records.
        </p>
        <p>
          Use the sidebar to navigate to other sections of the application, including users,
          questions, projects, settings, and more.
        </p>
      </main>
    </div>
  );
}
