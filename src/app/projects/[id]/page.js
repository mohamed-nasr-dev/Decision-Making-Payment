'use client';

import { useRouter } from 'next/navigation';
import styles from './project.module.css';

export default function ProjectPage({ params }) {
  const { id } = params;
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/projects/edit/${id}`);
  };

  const handleDelete = () => {
    alert('Project deleted successfully!');
    router.push('/projects');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Project Details</h1>
      <p className={styles.description}>Here are the details for project ID: {id}</p>
      <button className={styles.button} onClick={handleEdit}>
        Edit Project
      </button>
      <button className={styles.button} onClick={handleDelete}>
        Delete Project
      </button>
    </div>
  );
}
