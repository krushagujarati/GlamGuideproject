import React, { useState } from 'react';
import './Get.css';

const Get = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is your size?",
      type: "text",
      placeholder: "e.g., S / M / L"
    },
    {
      question: "What is your height (in cm)?",
      type: "number",
      placeholder: "e.g., 165"
    },
    {
      question: "What is your weight (in kg)?",
      type: "number",
      placeholder: "e.g., 55"
    },
    {
      question: "What is your bust size (in cm)?",
      type: "number",
      placeholder: "e.g., 85"
    },
    {
      question: "What is your waist size (in cm)?",
      type: "number",
      placeholder: "e.g., 65"
    },
    {
      question: "What is your hip size (in cm)?",
      type: "number",
      placeholder: "e.g., 90"
    },
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const showSuggestions = () => {
    alert('Here are your style suggestions!');
  };

  return (
    <div className="styled-container">
      <h1 className="form-title">Know Your Body Type</h1>

      <div className="styled-form">
        {questions.map((q, index) => (
          <div className={`question ${index === currentQuestion ? 'active' : ''}`} key={index}>
            <h2>{q.question}</h2>
            <input
              type={q.type}
              placeholder={q.placeholder}
            />
          </div>
        ))}

        {currentQuestion < questions.length - 1 ? (
          <button className="next-btn" onClick={nextQuestion}>Next</button>
        ) : (
          <button className="get-btn active" onClick={showSuggestions}>Get Suggestions</button>
        )}
      </div>
    </div>
  );
};

export default Get;
