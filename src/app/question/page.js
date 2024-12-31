
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./QuestionsList.module.css";

// export default function QuestionsList() {
//   const [questions, setQuestions] = useState([]);
//   const [expandedQuestions, setExpandedQuestions] = useState({});
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fetch questions from API
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("Authentication token is missing.");

//         const response = await fetch("http://127.0.0.1:3000/questions", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch questions.");
//         const data = await response.json();
//         setQuestions(data);
//       } catch (err) {
//         setError(err.message || "An error occurred.");
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleAddChild = (parentId) => {
//     router.push(`/question/add-child/${parentId}`);
//   };

//   const handleAnswer = (questionId, answer) => {
//     setExpandedQuestions((prev) => ({
//       ...prev,
//       [questionId]: answer,
//     }));
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Questions</h1>
//       <button
//         className={styles.addParentButton}
//         onClick={() => router.push("/question/add-parent")}
//       >
//         Add Parent Question
//       </button>
//       {error && <p className={styles.error}>{error}</p>}
//       {questions.map((parent) => (
//         <div key={parent.id} className={styles.accordion}>
//           <div className={styles.parent}>
//             <span>{parent.question}</span>
//             <div className={styles.radioButtons}>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${parent.id}`}
//                   onChange={() => handleAnswer(parent.id, "yes")}
//                   checked={expandedQuestions[parent.id] === "yes"}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${parent.id}`}
//                   onChange={() => handleAnswer(parent.id, "no")}
//                   checked={expandedQuestions[parent.id] === "no"}
//                 />
//                 No
//               </label>
//             </div>
//             <button
//               className={styles.addChildButton}
//               onClick={() => handleAddChild(parent.id)}
//             >
//               Add Child
//             </button>
//           </div>
//           {expandedQuestions[parent.id] && (
//             <div className={styles.children}>
//               {parent.children &&
//                 parent.children
//                   .filter(
//                     (child) =>
//                       (expandedQuestions[parent.id] === "yes" &&
//                         child.parent_answer_condition) ||
//                       (expandedQuestions[parent.id] === "no" &&
//                         !child.parent_answer_condition)
//                   )
//                   .map((child) => (
//                     <div key={child.id} className={styles.child}>
//                       {child.question}
//                       <div className={styles.radioButtons}>
//                         <label>
//                           <input
//                             type="radio"
//                             name={`question-${child.id}`}
//                             onChange={() => handleAnswer(child.id, "yes")}
//                             checked={expandedQuestions[child.id] === "yes"}
//                           />
//                           Yes
//                         </label>
//                         <label>
//                           <input
//                             type="radio"
//                             name={`question-${child.id}`}
//                             onChange={() => handleAnswer(child.id, "no")}
//                             checked={expandedQuestions[child.id] === "no"}
//                           />
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./QuestionsList.module.css";

// export default function QuestionsList() {
//   const [questions, setQuestions] = useState([]);
//   const [expandedQuestions, setExpandedQuestions] = useState({});
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fetch questions from API
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("Authentication token is missing.");

//         const response = await fetch("http://127.0.0.1:3000/questions", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch questions.");
//         const data = await response.json();
//         setQuestions(data);
//       } catch (err) {
//         setError(err.message || "An error occurred.");
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleAddChild = (parentId) => {
//     router.push(`/questions/add-child/${parentId}`);
//   };

//   const handleAnswer = (questionId, answer) => {
//     setExpandedQuestions((prev) => ({
//       ...prev,
//       [questionId]: answer,
//     }));
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Questions</h1>
//       <button
//         className={styles.addParentButton}
//         onClick={() => router.push("/questions/add-parent")}
//       >
//         Add Parent Question
//       </button>
//       {error && <p className={styles.error}>{error}</p>}
//       {questions.map((parent) => (
//         <div key={parent.id} className={styles.accordion}>
//           <div className={styles.parent}>
//             <span>{parent.question}</span>
//             <div className={styles.radioButtons}>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${parent.id}`}
//                   onChange={() => handleAnswer(parent.id, "yes")}
//                   checked={expandedQuestions[parent.id] === "yes"}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${parent.id}`}
//                   onChange={() => handleAnswer(parent.id, "no")}
//                   checked={expandedQuestions[parent.id] === "no"}
//                 />
//                 No
//               </label>
//             </div>
//             <button
//               className={styles.addChildButton}
//               onClick={() => handleAddChild(parent.id)}
//             >
//               Add Child
//             </button>
//           </div>
//           {expandedQuestions[parent.id] && (
//             <div className={styles.children}>
//               {parent.children &&
//                 parent.children
//                   .filter(
//                     (child) =>
//                       (expandedQuestions[parent.id] === "yes" &&
//                         child.parent_answer_condition) ||
//                       (expandedQuestions[parent.id] === "no" &&
//                         !child.parent_answer_condition)
//                   )
//                   .map((child) => (
//                     <div key={child.id} className={styles.child}>
//                       {child.question}
//                       <div className={styles.radioButtons}>
//                         <label>
//                           <input
//                             type="radio"
//                             name={`question-${child.id}`}
//                             onChange={() => handleAnswer(child.id, "yes")}
//                             checked={expandedQuestions[child.id] === "yes"}
//                           />
//                           Yes
//                         </label>
//                         <label>
//                           <input
//                             type="radio"
//                             name={`question-${child.id}`}
//                             onChange={() => handleAnswer(child.id, "no")}
//                             checked={expandedQuestions[child.id] === "no"}
//                           />
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./QuestionsList.module.css";

// export default function QuestionsList() {
//   const [questions, setQuestions] = useState([]);
//   const [expandedQuestions, setExpandedQuestions] = useState({});
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fetch questions from API
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("Authentication token is missing.");

//         const response = await fetch("http://127.0.0.1:3000/questions", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch questions.");
//         const data = await response.json();
//         setQuestions(data);
//       } catch (err) {
//         setError(err.message || "An error occurred.");
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleAddChild = (parentId) => {
//     router.push(`/question/add-child/${parentId}`);
//   };

//   const handleAnswer = (questionId, answer) => {
//     setExpandedQuestions((prev) => ({
//       ...prev,
//       [questionId]: answer,
//     }));
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Questions</h1>
//       <button
//         className={styles.addParentButton}
//         onClick={() => router.push("/question/add-parent")}
//       >
//         Add Parent Question
//       </button>
//       {error && <p className={styles.error}>{error}</p>}
//       {questions.map((parent) => (
//         <div key={parent.id} className={styles.accordion}>
//           <div className={styles.parent}>
//             <span>{parent.question}</span>
//             <div className={styles.radioButtons}>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${parent.id}`}
//                   onChange={() => handleAnswer(parent.id, "yes")}
//                   checked={expandedQuestions[parent.id] === "yes"}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${parent.id}`}
//                   onChange={() => handleAnswer(parent.id, "no")}
//                   checked={expandedQuestions[parent.id] === "no"}
//                 />
//                 No
//               </label>
//             </div>
//             <button
//               className={styles.addChildButton}
//               onClick={() => handleAddChild(parent.id)}
//             >
//               Add Child
//             </button>
//           </div>
//           {expandedQuestions[parent.id] && (
//             <div className={styles.children}>
//               {parent.children &&
//                 parent.children
//                   .filter(
//                     (child) =>
//                       (expandedQuestions[parent.id] === "yes" &&
//                         child.parent_answer_condition) ||
//                       (expandedQuestions[parent.id] === "no" &&
//                         !child.parent_answer_condition)
//                   )
//                   .map((child) => (
//                     <div key={child.id} className={styles.child}>
//                       <div className={styles.childContent}>
//                         <span>{child.question}</span>
//                         <div className={styles.radioButtons}>
//                           <label>
//                             <input
//                               type="radio"
//                               name={`question-${child.id}`}
//                               onChange={() => handleAnswer(child.id, "yes")}
//                               checked={expandedQuestions[child.id] === "yes"}
//                             />
//                             Yes
//                           </label>
//                           <label>
//                             <input
//                               type="radio"
//                               name={`question-${child.id}`}
//                               onChange={() => handleAnswer(child.id, "no")}
//                               checked={expandedQuestions[child.id] === "no"}
//                             />
//                             No
//                           </label>
//                         </div>
//                         <button
//                           className={styles.addChildButton}
//                           onClick={() => handleAddChild(child.id)}
//                         >
//                           Add Child
//                         </button>
//                       </div>
//                       {expandedQuestions[child.id] && (
//                         <div className={styles.grandChildren}>
//                           {child.children &&
//                             child.children.map((subChild) => (
//                               <div
//                                 key={subChild.id}
//                                 className={styles.subChild}
//                               >
//                                 {subChild.question}
//                                 <button
//                                   className={styles.addChildButton}
//                                   onClick={() => handleAddChild(subChild.id)}
//                                 >
//                                   Add Child
//                                 </button>
//                               </div>
//                             ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./QuestionsList.module.css";

export default function QuestionsList() {
  const [questions, setQuestions] = useState([]);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch questions from API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Authentication token is missing.");

        const response = await fetch("http://127.0.0.1:3000/questions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch questions.");
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err.message || "An error occurred.");
      }
    };

    fetchQuestions();
  }, []);

  const handleAddChild = (parentId) => {
    router.push(`/question/add-child/${parentId}`);
  };

  const handleAnswer = (questionId, answer) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const renderQuestionNode = (question) => (
    <div key={question.id} className={styles.questionNode}>
      <div className={styles.questionContent}>
        <span>{question.question}</span>
        <div className={styles.radioButtons}>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              onChange={() => handleAnswer(question.id, "yes")}
              checked={expandedQuestions[question.id] === "yes"}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              onChange={() => handleAnswer(question.id, "no")}
              checked={expandedQuestions[question.id] === "no"}
            />
            No
          </label>
        </div>
        <button
          className={styles.addChildButton}
          onClick={() => handleAddChild(question.id)}
        >
          Add Child
        </button>
      </div>
      {expandedQuestions[question.id] && (
        <div className={styles.children}>
          {question.children &&
            question.children.map((child) => renderQuestionNode(child))}
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Questions</h1>
      <button
        className={styles.addParentButton}
        onClick={() => router.push("/question/add-parent")}
      >
        Add Parent Question
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.questionsTree}>
        {questions.map((parent) => renderQuestionNode(parent))}
      </div>
    </div>
  );
}
