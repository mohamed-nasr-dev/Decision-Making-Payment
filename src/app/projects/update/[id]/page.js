'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './updateProject.module.css';

export default function UpdateProjectPage({ params }) {
  const { id } = params; // Get the project ID from the route
  const [formData, setFormData] = useState({
    name: '',
    client_name: '',
    description: '',
    from_language: '',
    to_language: '',
    scammer: false,
    decision: 'normal_payment',
    rate: 0,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch project details and pre-fill the form
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authentication token is missing.');

        const response = await fetch(`http://127.0.0.1:3000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch project details');
        const data = await response.json();
        setFormData({
          name: data.name,
          client_name: data.client_name,
          description: data.description,
          from_language: data.from_language,
          to_language: data.to_language,
          scammer: data.scammer,
          decision: data.decision,
          rate: data.rate,
        });
      } catch (err) {
        console.error(err);
        setError(err.message || 'An error occurred while fetching project details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update project');
      }

      alert('Project updated successfully!');
      router.push('/projects');
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while updating the project.');
    }
  };

  if (loading) return <p>Loading project data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Update Project</h1>
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
            required
          />
        </label>
        <label className={styles.label}>
          Client Name:
          <input
            type="text"
            name="client_name"
            value={formData.client_name}
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
            name="from_language"
            value={formData.from_language}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          To Language:
          <input
            type="text"
            name="to_language"
            value={formData.to_language}
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
          Update Project
        </button>
      </form>
    </div>
  );
}
