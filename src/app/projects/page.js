// 'use client';

// import { useRouter } from 'next/navigation';
// import styles from './projects.module.css';

// export default function ProjectsPage() {
//   const router = useRouter();

//   const projects = [
//     {
//       id: 1,
//       name: 'Website Translation',
//       clientName: 'Client A',
//       fromLanguage: 'English',
//       toLanguage: 'Spanish',
//       rate: 80,
//       scammer: false,
//       decision: 'Full Payment',
//     },
//     {
//       id: 2,
//       name: 'Legal Document Translation',
//       clientName: 'Client B',
//       fromLanguage: 'French',
//       toLanguage: 'English',
//       rate: 90,
//       scammer: true,
//       decision: 'No Payment',
//     },
//   ];

//   const handleViewProject = (id) => {
//     router.push(`/projects/${id}`);
//   };

//   const handleAddProject = () => {
//     router.push('/projects/add');
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Projects</h1>
//       <button className={styles.addButton} onClick={handleAddProject}>
//         Add New Project
//       </button>
//       {projects.length > 0 ? (
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Client</th>
//               <th>Language</th>
//               <th>Rate</th>
//               <th>Scammer</th>
//               <th>Decision</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((project) => (
//               <tr key={project.id}>
//                 <td>{project.name}</td>
//                 <td>{project.clientName}</td>
//                 <td>
//                   {project.fromLanguage} → {project.toLanguage}
//                 </td>
//                 <td>{project.rate}</td>
//                 <td>{project.scammer ? 'Yes' : 'No'}</td>
//                 <td>{project.decision}</td>
//                 <td>
//                   <button
//                     className={styles.viewButton}
//                     onClick={() => handleViewProject(project.id)}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No projects found. Start by adding a new project.</p>
//       )}
//     </div>
//   );
// }




// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './projects.module.css';

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState([]);
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fetch projects from the backend
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Retrieve token from localStorage

//         if (!token) {
//           throw new Error('Authentication token is missing. Please log in.');
//         }

//         const response = await fetch('http://127.0.0.1:3000/projects', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0NTYzMTM0LCJleHAiOjE3MzQ1OTkxMzR9.kaWpKXAeyec3xB5rab0vXIuMe7UhEEGSwQZ1WaMWpd0"}`, // Include token in Authorization header
//           },
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch projects');
//         }

//         const data = await response.json();
//         setProjects(data); // Update state with the fetched projects
//       } catch (err) {
//         console.error('Error fetching projects:', err.message);
//         setError(err.message || 'An error occurred while fetching projects.');
//       }
//     };

//     fetchProjects();
//   }, []); // Run only once after the component mounts

//   const handleViewProject = (id) => {
//     router.push(`/projects/${id}`);
//   };

//   const handleAddProject = () => {
//     router.push('/projects/add');
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Projects</h1>
//       <button className={styles.addButton} onClick={handleAddProject}>
//         Add New Project
//       </button>
//       {error && <p className={styles.error}>{error}</p>}
//       {projects.length > 0 ? (
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Client</th>
//               <th>Language</th>
//               <th>Rate</th>
//               <th>Scammer</th>
//               <th>Decision</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((project) => (
//               <tr key={project.id}>
//                 <td>{project.name}</td>
//                 <td>{project.clientName}</td>
//                 <td>
//                   {project.fromLanguage} → {project.toLanguage}
//                 </td>
//                 <td>{project.rate}</td>
//                 <td>{project.scammer ? 'Yes' : 'No'}</td>
//                 <td>{project.decision}</td>
//                 <td>
//                   <button
//                     className={styles.viewButton}
//                     onClick={() => handleViewProject(project.id)}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No projects found. Start by adding a new project.</p>
//       )}
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './projects.module.css';

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState([]);
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fetch projects from the backend
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Retrieve token from localStorage

//         if (!token) {
//           throw new Error('Authentication token is missing. Please log in.');
//         }

//         const response = await fetch('http://127.0.0.1:3000/projects', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzM0NzAyODU3LCJleHAiOjE3MzQ3Mzg4NTd9.caJrNh3Xp8tA1nAgYedXHsWn_Jl2Gb7hLDkVfDwvz4I"}`, // Include token in Authorization header
//           },
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch projects');
//         }

//         const data = await response.json();
//         setProjects(data); // Update state with the fetched projects
//       } catch (err) {
//         console.error('Error fetching projects:', err.message);
//         setError(err.message || 'An error occurred while fetching projects.');
//       }
//     };

//     fetchProjects();
//   }, []); // Run only once after the component mounts

//   const handleViewProject = (id) => {
//     router.push(`/projects/${id}`);
//   };

//   const handleAddProject = () => {
//     router.push('/projects/add');
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Projects</h1>
//       <button className={styles.addButton} onClick={handleAddProject}>
//         Add New Project
//       </button>
//       {error && <p className={styles.error}>{error}</p>}
//       {projects.length > 0 ? (
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Client Name</th>
//               <th>Project Name</th>
//               <th>Description</th>
//               <th>From Language</th>
//               <th>To Language</th>
//               <th>Scammer</th>
//               <th>Decision</th>
//               <th>Rate</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((project) => (
//               <tr key={project.id}>
//                 <td>{project.client_name}</td>
//                 <td>{project.name}</td>
//                 <td>{project.description}</td>
//                 <td>{project.from_language}</td>
//                 <td>{project.to_language}</td>
//                 <td>{project.scammer ? 'Yes' : 'No'}</td>
//                 <td>{project.decision}</td>
//                 <td>{project.rate}</td>
//                 <td>
//                   <button
//                     className={styles.viewButton}
//                     onClick={() => handleViewProject(project.id)}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No projects found. Start by adding a new project.</p>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './projects.module.css';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch projects from the backend
  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      if (!token) {
        throw new Error('Authentication token is missing. Please log in.');
      }

      const response = await fetch('http://127.0.0.1:3000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch projects');
      }

      const data = await response.json();
      setProjects(data); // Update state with the fetched projects
    } catch (err) {
      console.error('Error fetching projects:', err.message);
      setError(err.message || 'An error occurred while fetching projects.');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication token is missing.');

      const response = await fetch(`http://127.0.0.1:3000/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete project');

      alert('Project deleted successfully!');
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      ); // Update state after deletion
    } catch (err) {
      console.error('Error deleting project:', err.message);
      alert('An error occurred while deleting the project.');
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Authentication token is missing.');

    const response = await fetch(`http://127.0.0.1:3000/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Failed to update project');
    alert('Project updated successfully!');
    router.push('/projects');
  } catch (err) {
    console.error(err);
    setError(err.message || 'An error occurred while updating the project.');
  }
};
  const handleUpdateProject = (id) => {
    router.push(`/projects/update/${id}`);
  };

  const handleViewProject = (id) => {
    router.push(`/projects/${id}`);
  };

  const handleAddProject = () => {
    router.push('/projects/add');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <button className={styles.addButton} onClick={handleAddProject}>
        Add New Project
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {projects.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>From Language</th>
              <th>To Language</th>
              {/* <th>Scammer</th>
              <th>Decision</th>
              <th>Rate</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.client_name}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.from_language}</td>
                <td>{project.to_language}</td>
                {/* <td>{project.scammer ? 'Yes' : 'No'}</td>
                <td>{project.decision}</td>
                <td>{project.rate}</td> */}
                <td>
                  {/* <button
                    className={styles.viewButton}
                    onClick={() => handleViewProject(project.id)}
                  >
                    View
                  </button> */}
                  <button
                    className={styles.updateButton}
                    onClick={() => handleUpdateProject(project.id)}
                  >
                    Update
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No projects found. Start by adding a new project.</p>
      )}
    </div>
  );
}





