// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './login.module.css';

// export default function LoginPage() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
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

//     if (!formData.email || !formData.password) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     // Make the API request
//     try {
//       const response = await fetch('http://127.0.0.1:3000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       // Log the response data
//       const responseData = await response.json();
//       console.log('Response:', responseData);

//       // Handle success (assuming the API returns a token or some data)
//       alert('Login successful!');
//       localStorage.setItem('token', responseData.token || 'dummyToken'); // Save the token or any data returned by the API
//       router.push('/projects'); // Redirect to the home page or dashboard
//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('Invalid email or password.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Login</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
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
//         <label className={styles.label}>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './login.module.css';

// export default function LoginPage() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
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

//     if (!formData.email || !formData.password) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://127.0.0.1:3000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       // Check if response is okay (status code 200-299)
//       if (!response.ok) {
//         throw new Error('Login failed: ' + response.statusText);
//       }

//       // Try to parse the response as JSON
//       const responseData = await response.json();
//       console.log('Response Data:', responseData);

//       // Handle successful login (assuming the API returns a token or some data)
//       alert('Login successful!');
//       localStorage.setItem('token', responseData.token || 'dummyToken'); // Save the token or any data returned by the API
//       router.push('/projects'); // Redirect to the home page or dashboard

//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('An error occurred during login. Please try again later.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Login</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
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
//         <label className={styles.label}>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
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

    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      // Check if response is okay (status code 200-299)
      if (!response.ok) {
        throw new Error('Login failed: ' + response.statusText);
      }

      // Try to parse the response as JSON
      const responseData = await response.json();
      console.log('Response Data:', responseData);

      // Handle successful login (assuming the API returns a token or some data)
      alert('Login successful!');
      localStorage.setItem('token', responseData.token || 'dummyToken'); // Save the token or any data returned by the API
      router.push('/body'); // Redirect to the home page or dashboard

    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p className={styles.error}>{error}</p>}
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
          Login
        </button>
      </form>
    </div>
  );
}













