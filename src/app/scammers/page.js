'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './scammers.module.css';

export default function ListScammers() {
  const [scammers, setScammers] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchScammers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authentication token is missing.');

        const response = await fetch('http://127.0.0.1:3000/scammers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch scammers');
        const data = await response.json();
        setScammers(data);
      } catch (err) {
        console.error('Error fetching scammers:', err);
        setError(err.message || 'An error occurred while fetching scammers.');
      }
    };

    fetchScammers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this scammer?')) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication token is missing.');

      const response = await fetch(`http://127.0.0.1:3000/scammers/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete scammer');
      setScammers(scammers.filter((scammer) => scammer.id !== id));
      alert('Scammer deleted successfully!');
    } catch (err) {
      console.error(err);
      alert('Error deleting scammer.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Scammers</h1>
      <button onClick={() => router.push('/scammers/add')} className={styles.addButton}>
        Add New Scammer
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {scammers.map((scammer) => (
            <tr key={scammer.id}>
              <td>{scammer.name}</td>
              <td>
                <button
                  onClick={() => router.push(`/scammers/update/${scammer.id}`)}
                  className={styles.updateButton}
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(scammer.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
