// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addScammer.module.css';

// export default function AddScammer() {
//   const [name, setName] = useState('');
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('Authentication token is missing.');

//       const response = await fetch('http://127.0.0.1:3000/scammers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ name }),
//       });

//       if (!response.ok) throw new Error('Failed to add scammer');
//       alert('Scammer added successfully!');
//       router.push('/scammers');
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'An error occurred while adding the scammer.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Add Scammer</h1>
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
//           Add Scammer
//         </button>
//       </form>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './addScammer.module.css';

export default function AddScammer() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication token is missing.');

      const response = await fetch('http://127.0.0.1:3000/scammers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error('Failed to add scammer');
      alert('Scammer added successfully!');
      router.push('/scammers');
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while adding the scammer.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Add Scammer</h1>
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
            Add Scammer
          </button>
        </form>
      </div>
    </div>
  );
}
