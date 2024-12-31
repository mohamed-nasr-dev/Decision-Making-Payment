// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './updateScammer.module.css';

// export default function UpdateScammer({ params }) {
//   const { id } = params;
//   const [name, setName] = useState('');
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchScammer = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('Authentication token is missing.');

//         const response = await fetch(`http://127.0.0.1:3000/scammers/${id}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) throw new Error('Failed to fetch scammer details');
//         const data = await response.json();
//         setName(data.name);
//       } catch (err) {
//         console.error(err);
//         setError(err.message || 'An error occurred while fetching scammer details.');
//       }
//     };

//     fetchScammer();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('Authentication token is missing.');

//       const response = await fetch(`http://127.0.0.1:3000/scammers/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ name }),
//       });

//       if (!response.ok) throw new Error('Failed to update scammer');
//       alert('Scammer updated successfully!');
//       router.push('/scammers');
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'An error occurred while updating the scammer.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Update Scammer</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
//         <label className={styles.label}>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Update Scammer
//         </button>
//       </form>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './updateScammer.module.css';

export default function UpdateScammer({ params }) {
  const { id } = params;
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchScammer = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authentication token is missing.');

        const response = await fetch(`http://127.0.0.1:3000/scammers/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch scammer details');
        const data = await response.json();
        setName(data.name);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message || 'An error occurred while fetching scammer details.');
        setLoading(false);
      }
    };

    fetchScammer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication token is missing.');

      const response = await fetch(`http://127.0.0.1:3000/scammers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error('Failed to update scammer');
      alert('Scammer updated successfully!');
      router.push('/scammers');
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while updating the scammer.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Update Scammer</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <p className={styles.error}>{error}</p>}
          <label className={styles.label}>
            Scammer Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Enter scammer's name"
              required
            />
          </label>
          <button type="submit" className={styles.button}>
            Update Scammer
          </button>
        </form>
      </div>
    </div>
  );
}
