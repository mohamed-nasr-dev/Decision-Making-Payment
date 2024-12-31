"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AddChildQuestion.module.css";

export default function AddChildQuestion({ params }) {
  const { parentId } = params; // Extract parentId from route parameters
  const [formData, setFormData] = useState({
    name: "",
    trueRate: "",
    falseRate: "",
    isActive: false,
    parentAnswerCondition: "yes",
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
  
      if (!formData.name || typeof formData.name !== "string") {
        throw new Error("Question name must be a non-empty string.");
      }
  
      if (isNaN(formData.trueRate) || formData.trueRate < 0) {
        throw new Error("True Rate must be a number greater than or equal to 0.");
      }
  
      if (isNaN(formData.falseRate) || formData.falseRate < 0) {
        throw new Error("False Rate must be a number greater than or equal to 0.");
      }
  
      // Convert parent_id to a number and parent_answer_condition to a boolean
      const payload = {
        question: formData.name.trim(),
        true_rate: parseFloat(formData.trueRate),
        false_rate: parseFloat(formData.falseRate),
        is_active: formData.isActive,
        parent_id: parentId ? parseInt(parentId, 10) : null, // Ensure parent_id is a number
        parent_answer_condition: formData.parentAnswerCondition === "yes", // Convert to boolean
      };
  
      console.log("Submitting Payload:", payload);
  
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
      console.error(err);
      setError(err.message || "An error occurred while creating the question.");
    }
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add Child Question</h1>
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
        <label className={styles.label}>
          Parent Answer Condition:
          <select
            name="parentAnswerCondition"
            value={formData.parentAnswerCondition}
            onChange={handleInputChange}
            className={styles.input}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <button type="submit" className={styles.submitButton}>
          Save Child Question
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
