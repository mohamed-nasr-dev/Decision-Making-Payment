"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AddParentQuestion.module.css";

export default function AddParentQuestion() {
  const [formData, setFormData] = useState({
    name: "",
    trueRate: "",
    falseRate: "",
    isActive: false,
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Authentication token is missing.");

      // Validate and sanitize input
      if (!formData.name || typeof formData.name !== "string") {
        throw new Error("Question must be a non-empty string.");
      }

      if (isNaN(formData.trueRate) || formData.trueRate < 0) {
        throw new Error("True Rate must be a number greater than or equal to 0.");
      }

      if (isNaN(formData.falseRate) || formData.falseRate < 0) {
        throw new Error("False Rate must be a number greater than or equal to 0.");
      }

      // Build payload to match backend expectations
      const payload = {
        question: formData.name.trim(),
        true_rate: parseFloat(formData.trueRate),
        false_rate: parseFloat(formData.falseRate),
        is_active: formData.isActive || false,
        parent_id: null, // For parent questions
        parent_answer_condition: null,
      };

      console.log("Submitting Payload:", payload);

      // Make API request
      const response = await fetch("http://127.0.0.1:3000/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.message || "Failed to create question.");
      }

      alert("Question created successfully!");
      router.push("/question");
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message || "An error occurred while creating the question.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add Parent Question</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          True Rate:
          <input
            type="number"
            name="trueRate"
            value={formData.trueRate}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          False Rate:
          <input
            type="number"
            name="falseRate"
            value={formData.falseRate}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleInputChange}
          />
          Is Active
        </label>
        <button type="submit" className={styles.submitButton}>
          Save Parent Question
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
