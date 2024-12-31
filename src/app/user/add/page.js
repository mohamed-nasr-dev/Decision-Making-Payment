// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addUser.module.css';

// export default function AddUserPage() {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [error, setError] = useState(null);
//   const router = useRouter();

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
//       const response = await fetch('http://127.0.0.1:3000/users', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       console.log('Form Data:', formData);

//       if (!response.ok) throw new Error('Failed to add user');
//       alert('User added successfully!');
//       router.push('/user');
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred while adding the user.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Add New User</h1>
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
//           Add User
//         </button>
//       </form>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addUser.module.css';

// export default function AddUserPage() {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [error, setError] = useState(null);
//   const router = useRouter();

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
//       const token = localStorage.getItem('token'); // Get token from localStorage

//       if (!token) {
//         throw new Error('Authentication token is missing.');
//       }

//       const response = await fetch('http://127.0.0.1:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0MjkzNjkyLCJleHAiOjE3MzQzMjk2OTJ9.5JWPckgCqo3OtkyBsRqX-6jxdvJ2ap5SYl4CiEwBw_4"}`, // Add token to Authorization header
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log('Form Data:', formData);

//       if (!response.ok) throw new Error('Failed to add user');
//       alert('User added successfully!');
//       router.push('/user'); // Redirect to the users page
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred while adding the user.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Add New User</h1>
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
//           Add User
//         </button>
//       </form>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addUser.module.css';

// export default function AddUserPage() {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [error, setError] = useState(null);
//   const router = useRouter();

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
//       const token = localStorage.getItem('token'); // Retrieve token from localStorage

//       if (!token) {
//         throw new Error('Authentication token is missing. Please log in.');
//       }

//       const response = await fetch('http://127.0.0.1:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0MjkzNjkyLCJleHAiOjE3MzQzMjk2OTJ9.5JWPckgCqo3OtkyBsRqX-6jxdvJ2ap5SYl4CiEwBw_4"}`, // Include Authorization header
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log('Request Payload:', formData);

//       if (!response.ok) {
//         const errorData = await response.json(); // Parse error message from backend
//         console.error('Response Error:', errorData);
//         throw new Error(errorData.message || 'Failed to add user');
//       }

//       const responseData = await response.json();
//       console.log('Response Data:', responseData);

//       alert('User added successfully!');
//       router.push('/user');
//     } catch (err) {
//       console.error('Error adding user:', err);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Add New User</h1>
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
//           Add User
//         </button>
//       </form>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addUser.module.css';

// export default function AddUserPage() {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [error, setError] = useState(null);
//   const router = useRouter();

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
//       // Retrieve token from localStorage
//       const token = localStorage.getItem('token');

//       if (!token) {
//         throw new Error('Authentication token is missing. Please log in.');
//       }

//       // Make the POST request with Authorization header
//       const response = await fetch('http://127.0.0.1:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0Mjk5NzU1LCJleHAiOjE3MzQzMzU3NTV9.pBtam6_WzApIBRpQXISUcoYRDV-pOIkdture8BSsRVg"}`, // Include token in the Authorization header
//         },
//         body: JSON.stringify(formData), // Include form data
//       });

//       console.log('Form Data:', formData);

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to add user');
//       }

//       alert('User added successfully!');
//       router.push('/user'); // Redirect to the users list page
//     } catch (err) {
//       console.error('Error:', err.message);
//       setError(err.message || 'An error occurred while adding the user.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Add New User</h1>
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
//           Add User
//         </button>
//       </form>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './addUser.module.css';

export default function AddUserPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

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
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Authentication token is missing. Please log in.');
      }

      // Make the POST request with Authorization header
      const response = await fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include token in the Authorization header
        },
        body: JSON.stringify(formData), // Include form data
      });

      console.log('Form Data:', formData);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add user');
      }

      alert('User added successfully!');
      router.push('/user'); // Redirect to the users list page
    } catch (err) {
      console.error('Error:', err.message);
      setError(err.message || 'An error occurred while adding the user.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add New User</h1>
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
        <label className={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
    </div>
  );
}
