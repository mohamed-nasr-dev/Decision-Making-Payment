// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addProject.module.css';

// export default function AddProjectPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     clientName: '',
//     description: '',
//     fromLanguage: '',
//     toLanguage: '',
//   });
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);

//     if (!formData.name || !formData.clientName || !formData.fromLanguage || !formData.toLanguage) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     alert('Project added successfully!');
//     router.push('/projects'); // Redirect to projects page
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Add New Project</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
//         <label className={styles.label}>
//           Project Name:
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
//           Client Name:
//           <input
//             type="text"
//             name="clientName"
//             value={formData.clientName}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Description:
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className={styles.textarea}
//           />
//         </label>
//         <label className={styles.label}>
//           From Language:
//           <input
//             type="text"
//             name="fromLanguage"
//             value={formData.fromLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           To Language:
//           <input
//             type="text"
//             name="toLanguage"
//             value={formData.toLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Save Project
//         </button>
//       </form>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addProject.module.css';

// export default function AddProjectPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     clientName: '',
//     description: '',
//     fromLanguage: '',
//     toLanguage: '',
//   });
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

//     if (!formData.name || !formData.clientName || !formData.fromLanguage || !formData.toLanguage) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     try {
//       // Retrieve the token from localStorage
//       const token = localStorage.getItem('token');

//       if (!token) {
//         throw new Error('Authentication token is missing. Please log in.');
//       }

//       // Make the API request to save the project
//       const response = await fetch('http://127.0.0.1:3000/projects', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0MzQxODg4LCJleHAiOjE3MzQzNzc4ODh9.tVgWsyG5DpXuLvE5AE72Woz2GvTpeqc58f2dDNOrxz0"}`, // Include the token in the Authorization header
//         },
//         body: JSON.stringify(formData), // Send form data as JSON
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to add project');
//       }

//       alert('Project added successfully!');
//       router.push('/projects'); // Redirect to the projects page
//     } catch (err) {
//       console.error('Error:', err.message);
//       setError(err.message || 'An error occurred while adding the project.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Add New Project</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
//         <label className={styles.label}>
//           Project Name:
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
//           Client Name:
//           <input
//             type="text"
//             name="clientName"
//             value={formData.clientName}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Description:
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className={styles.textarea}
//           />
//         </label>
//         <label className={styles.label}>
//           From Language:
//           <input
//             type="text"
//             name="fromLanguage"
//             value={formData.fromLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           To Language:
//           <input
//             type="text"
//             name="toLanguage"
//             value={formData.toLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Save Project
//         </button>
//       </form>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addProject.module.css';

// export default function AddProjectPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     clientName: '',
//     description: '',
//     fromLanguage: '',
//     toLanguage: '',
//   });
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

//     // Validate fields before sending
//     if (!formData.clientName || typeof formData.clientName !== 'string') {
//       setError('Client Name is required and must be a string.');
//       return;
//     }
//     if (!formData.fromLanguage || typeof formData.fromLanguage !== 'string') {
//       setError('From Language is required and must be a string.');
//       return;
//     }
//     if (!formData.toLanguage || typeof formData.toLanguage !== 'string') {
//       setError('To Language is required and must be a string.');
//       return;
//     }

//     try {
//       // Retrieve token from localStorage
//       const token = localStorage.getItem('token');

//       if (!token) {
//         throw new Error('Authentication token is missing. Please log in.');
//       }

//       // Make the POST request with Authorization header
//       const response = await fetch('http://127.0.0.1:3000/projects', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0MzQxODg4LCJleHAiOjE3MzQzNzc4ODh9.tVgWsyG5DpXuLvE5AE72Woz2GvTpeqc58f2dDNOrxz0"}`, // Include token in the Authorization header
//         },
//         body: JSON.stringify(formData), // Include form data
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to add project');
//       }

//       alert('Project added successfully!');
//       router.push('/projects'); // Redirect to the projects page
//     } catch (err) {
//       console.error('Error:', err.message);
//       setError(err.message || 'An error occurred while adding the project.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Add New Project</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
//         <label className={styles.label}>
//           Project Name:
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
//           Client Name:
//           <input
//             type="text"
//             name="clientName"
//             value={formData.clientName}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Description:
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className={styles.textarea}
//           />
//         </label>
//         <label className={styles.label}>
//           From Language:
//           <input
//             type="text"
//             name="fromLanguage"
//             value={formData.fromLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           To Language:
//           <input
//             type="text"
//             name="toLanguage"
//             value={formData.toLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Save Project
//         </button>
//       </form>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './addProject.module.css';

// export default function AddProjectPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     clientName: '',
//     description: '',
//     fromLanguage: '',
//     toLanguage: '',
//     scammer: '',
//     decision: '', // Options: full_payment, down_payment, normal_payment
//     rate: '', // Numeric value
//   });
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     // Validate fields
//     if (!formData.clientName.trim() || !formData.fromLanguage.trim() || !formData.toLanguage.trim()) {
//       setError('All fields must be filled out correctly.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Authentication token is missing. Please log in.');
//       }

//       const payload = {
//         name: formData.name.trim(),
//         client_name: formData.clientName.trim(),
//         description: formData.description.trim(),
//         from_language: formData.fromLanguage.trim(),
//         to_language: formData.toLanguage.trim(),
//         scammer: formData.scammer,
//         decision: formData.decision,
//         rate: parseFloat(formData.rate), // Ensure numeric value
//       };

//       const response = await fetch('http://127.0.0.1:3000/projects', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0NzAyODU3LCJleHAiOjE3MzQ3Mzg4NTd9.caJrNh3Xp8tA1nAgYedXHsWn_Jl2Gb7hLDkVfDwvz4I"}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to add project');
//       }

//       alert('Project added successfully!');
//       router.push('/projects');
//     } catch (err) {
//       console.error('Error:', err.message);
//       setError(err.message || 'An error occurred while adding the project.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Add New Project</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         {error && <p className={styles.error}>{error}</p>}
//         <label className={styles.label}>
//           Project Name:
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
//           Client Name:
//           <input
//             type="text"
//             name="clientName"
//             value={formData.clientName}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Description:
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className={styles.textarea}
//           />
//         </label>
//         <label className={styles.label}>
//           From Language:
//           <input
//             type="text"
//             name="fromLanguage"
//             value={formData.fromLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           To Language:
//           <input
//             type="text"
//             name="toLanguage"
//             value={formData.toLanguage}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Scammer:
//           <input
//             type="checkbox"
//             name="scammer"
//             checked={formData.scammer}
//             onChange={handleInputChange}
//             className={styles.checkbox}
//           />
//         </label>
//         <label className={styles.label}>
//           Decision:
//           <select
//             name="decision"
//             value={formData.decision}
//             onChange={handleInputChange}
//             className={styles.select}
//             required
//           >
//             <option value="">Select Decision</option>
//             <option value="full_payment">Full Payment</option>
//             <option value="down_payment">Down Payment</option>
//             <option value="normal_payment">Normal Payment</option>
//           </select>
//         </label>
//         <label className={styles.label}>
//           Rate:
//           <input
//             type="number"
//             name="rate"
//             value={formData.rate}
//             onChange={handleInputChange}
//             className={styles.input}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.button}>
//           Save Project
//         </button>
//       </form>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './addProject.module.css';

export default function AddProjectPage() {
  const [formData, setFormData] = useState({
    name: '',
    clientName: '',
    description: '',
    fromLanguage: '',
    toLanguage: '',
    scammer: false,
    decision: '',
    rate: 0,
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate required fields
    const requiredFields = ['clientName', 'fromLanguage', 'toLanguage'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`${field} is required and must be a valid string.`);
        return;
      }
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication token is missing.');

      const response = await fetch('http://127.0.0.1:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          client_name: formData.clientName,
          description: formData.description,
          from_language: formData.fromLanguage,
          to_language: formData.toLanguage,
          scammer: formData.scammer,
          decision: formData.decision,
          rate: formData.rate,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add project.');
      }

      alert('Project added successfully!');
      router.push('/projects');
    } catch (err) {
      console.error('Error:', err.message);
      setError(err.message || 'An error occurred while adding the project.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add New Project</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p className={styles.error}>{error}</p>}
        <label className={styles.label}>
          Project Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Client Name:
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={styles.textarea}
          />
        </label>
        <label className={styles.label}>
          From Language:
          <input
            type="text"
            name="fromLanguage"
            value={formData.fromLanguage}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          To Language:
          <input
            type="text"
            name="toLanguage"
            value={formData.toLanguage}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Scammer:
          <input
            type="checkbox"
            name="scammer"
            checked={formData.scammer}
            onChange={handleInputChange}
            className={styles.checkbox}
          />
        </label>
        <label className={styles.label}>
          Decision:
          <select
            name="decision"
            value={formData.decision}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value="">Select</option>
            <option value="full_payment">Full Payment</option>
            <option value="down_payment">Down Payment</option>
            <option value="normal_payment">Normal Payment</option>
          </select>
        </label>
        <label className={styles.label}>
          Rate:
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Save Project
        </button>
      </form>
    </div>
  );
}
