// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './updateUser.module.css';

// export default function UpdateUserPage({ params }) {
//   const { id } = params; // Get the user ID from the route
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading state
//   const router = useRouter();

//   // Fetch user data by ID and pre-fill the form
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:3000/api/users/${id}`);
//         if (!response.ok) throw new Error('Failed to fetch user data');
//         const data = await response.json();
//         setFormData({ name: data.name, email: data.email });
//       } catch (err) {
//         console.error(err);
//         setError('An error occurred while fetching user data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await fetch(`http://127.0.0.1:3000/api/users/${id}`, {
//         method: 'PUT', // Update request
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) throw new Error('Failed to update user');
//       alert('User updated successfully!');
//       router.push('/users'); // Redirect back to the users list
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred while updating the user.');
//     }
//   };

//   if (loading) return <p>Loading user data...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.container}>
//       <h1>Update User</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
//         <label className={styles.label}>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Update User
//         </button>
//       </form>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './updateUser.module.css';

export default function UpdateUserPage({ params }) {
  const { id } = params; // Get the user ID from the route
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter();

  // Fetch user data by ID and pre-fill the form
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token

        if (!token) {
          throw new Error('Authentication token is missing. Please log in.');
        }

        const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0OTQ1NjIxLCJleHAiOjE3MzQ5ODE2MjF9.zBldDwxQ7Tkn6lF9myEvWsso-5zT_r5YQCTGsxnYFXA"}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setFormData({ name: data.name, email: data.email }); // Pre-fill form data
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const token = localStorage.getItem('token'); // Retrieve the token

      if (!token) {
        throw new Error('Authentication token is missing. Please log in.');
      }

      const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {
        method: 'PUT', // Update request
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0OTQ1NjIxLCJleHAiOjE3MzQ5ODE2MjF9.zBldDwxQ7Tkn6lF9myEvWsso-5zT_r5YQCTGsxnYFXA"}`, // Include the token
        },
        body: JSON.stringify(formData), // Send updated data
      });

      if (!response.ok) throw new Error('Failed to update user');
      alert('User updated successfully!');
      router.push('/user'); // Redirect back to the users list
    } catch (err) {
      console.error(err);
      setError('An error occurred while updating the user.');
    }
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p className={styles.error}>{error}</p>}
        <label className={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Update User
        </button>
      </form>
    </div>
  );
}
