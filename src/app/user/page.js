// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './users.module.css';

// export default function UsersPage() {
//   const [users, setUsers] = useState([]); 
//   const [error, setError] = useState(null); 
//   const router = useRouter();

  
// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://127.0.0.1:3000/users'); 
// //         if (!response.ok) throw new Error('Failed to fetch users');
// //         const data = await response.json();
// //         setUsers(data); // Store users in state
// //       } catch (err) {
// //         console.error(err);
// //         setError('An error occurred while fetching users.');
// //       }
// //     };

// //     fetchUsers();
// //   }, []);
// // useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://127.0.0.1:3000/users', {
// //           method: 'GET',
// //           headers: {
// //             'Content-Type': 'application/json', 
// //             Authorization: 'Bearer your-auth-token', 
// //           },
// //         });
  
// //         if (!response.ok) throw new Error('Failed to fetch users');
// //         const data = await response.json();
// //         setUsers(data); // Store the data in the state
// //       } catch (err) {
// //         console.error(err);
// //         setError('An error occurred while fetching users.');
// //       }
// //     };
  
// //     fetchUsers();
// //   }, []);
// const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:3000/users', {
//         method: 'GET', // Fetch Users endpoint
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       // Check if response is okay (status code 200-299)
//       if (!response.ok) {
//         throw new Error('Fetch users failed: ' + response.statusText);
//       }
  
//       // Parse the response as JSON
//       const users = await response.json();
//       console.log('Fetched Users:', users);
  
//       // Update state or UI
//       setUsers(users);
//     } catch (err) {
//       console.error('Error fetching users:', err);
//       setError('An error occurred while fetching users. Please try again.');
//     }
//   };
  
//   // Handle delete user
//   const handleDelete = async (id) => {
//     const confirmDelete = confirm('Are you sure you want to delete this user?');
//     if (!confirmDelete) return;

//     try {
//       const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Failed to delete user');
//       alert('User deleted successfully!');
//       setUsers(users.filter((user) => user.id !== id)); // Update state after deletion
//     } catch (err) {
//       console.error(err);
//       alert('An error occurred while deleting the user.');
//     }
//   };

//   // Navigate to Add User page
//   const handleAddUser = () => {
//     router.push('/user/add');
//   };

//   // Navigate to Update User page
//   const handleUpdate = (id) => {
//     router.push(`/users/update/${id}`);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Users Management</h1>
//       <button onClick={handleAddUser} className={styles.addButton}>
//         Add New User
//       </button>
//       {error && <p className={styles.error}>{error}</p>}
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button
//                   className={styles.updateButton}
//                   onClick={() => handleUpdate(user.id)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className={styles.deleteButton}
//                   onClick={() => handleDelete(user.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './users.module.css';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch users with Authorization header
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage

        if (!token) {
          throw new Error('Authentication token is missing.');
        }

        const response = await fetch('http://127.0.0.1:3000/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Fetched Users:', data);

        setUsers(data); // Update state with the fetched users
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('An error occurred while fetching users.');
      }
    };

    fetchUsers();
  }, []);

  // Handle delete user with Authorization header
  const handleDelete = async (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token'); // Get token from localStorage

      if (!token) {
        throw new Error('Authentication token is missing.');
      }

      const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0OTQ1NjIxLCJleHAiOjE3MzQ5ODE2MjF9.zBldDwxQ7Tkn6lF9myEvWsso-5zT_r5YQCTGsxnYFXA"
}`, // Include token in Authorization header
        },
      });

      if (!response.ok) throw new Error('Failed to delete user');

      alert('User deleted successfully!');
      setUsers(users.filter((user) => user.id !== id)); // Update state after deletion
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('An error occurred while deleting the user.');
    }
  };

  // Navigate to Add User page
  const handleAddUser = () => {
    router.push('/user/add');
  };

  // Navigate to Update User page
  const handleUpdate = (id) => {
    router.push(`/user/update/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Users Management</h1>
      <button onClick={handleAddUser} className={styles.addButton}>
        Add New User
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className={styles.updateButton}
                  onClick={() => handleUpdate(user.id)}
                >
                  Update
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(user.id)}
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













// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './users.module.css';
// export default function UsersPage() {
//   const [users, setUsers] = useState([]); 
//   const [error, setError] = useState(null); 
//   const router = useRouter();
 
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:3000/users', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch users: ' + response.statusText);
//         }
//         const data = await response.json();
//         console.log('Fetched Users:', data);

//         setUsers(data);
//       } catch (err) {
//         console.error('Error fetching users:', err);
//         setError('An error occurred while fetching users.');
//       }
//     };

//     fetchUsers(); 
//   }, []); 
  
//   const handleDelete = async (id) => {
//     const confirmDelete = confirm('Are you sure you want to delete this user?');
//     if (!confirmDelete) return;

//     try {
//       const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) throw new Error('Failed to delete user');

//       alert('User deleted successfully!');
//       setUsers(users.filter((user) => user.id !== id)); 
//     } catch (err) {
//       console.error('Error deleting user:', err);
//       alert('An error occurred while deleting the user.');
//     }
//   };

//   const handleAddUser = () => {
//     router.push('/user/add');
//   };

  
//   const handleUpdate = (id) => {
//     router.push(`/user/update/${id}`);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Users Management</h1>
//       <button onClick={handleAddUser} className={styles.addButton}>
//         Add New User
//       </button>
//       {error && <p className={styles.error}>{error}</p>}
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button
//                   className={styles.updateButton}
//                   onClick={() => handleUpdate(user.id)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className={styles.deleteButton}
//                   onClick={() => handleDelete(user.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
