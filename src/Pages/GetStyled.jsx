import React, { useState } from 'react';
import './GetStyled.css';

const GetStyled = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({
    size: '',
    height: '',
    weight: '',
    bust: '',
    waist: '',
    hips: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const questions = [
    {
      question: "What is your size?",
      type: "text",
      placeholder: "e.g., S / M / L",
      field: "size",
    },
    {
      question: "What is your height (in cm)?",
      type: "number",
      placeholder: "e.g., 165",
      field: "height",
    },
    {
      question: "What is your weight (in kg)?",
      type: "number",
      placeholder: "e.g., 55",
      field: "weight",
    },
    {
      question: "What is your bust size (in cm)?",
      type: "number",
      placeholder: "e.g., 85",
      field: "bust",
    },
    {
      question: "What is your waist size (in cm)?",
      type: "number",
      placeholder: "e.g., 65",
      field: "waist",
    },
    {
      question: "What is your hip size (in cm)?",
      type: "number",
      placeholder: "e.g., 90",
      field: "hips",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextQuestion = () => {
    const currentField = questions[currentQuestion].field;
    if (!formData[currentField]) {
      setErrorMessage('Please fill out this question before proceeding.');
      return;
    }
    setErrorMessage(''); // Clear error message if filled

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const showSuggestions = () => {
    // Check if all fields are filled before showing suggestions
    const allFilled = Object.values(formData).every((value) => value.trim() !== '');
    if (!allFilled) {
      setErrorMessage('Please answer all the questions before submitting.');
      return;
    }
    setErrorMessage(''); // Clear error message if all fields are filled

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
              name={q.field}
              placeholder={q.placeholder}
              value={formData[q.field]}
              onChange={handleInputChange}
            />
          </div>
        ))}

        {/* Error message */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {currentQuestion < questions.length - 1 ? (
          <button className="next-btn" onClick={nextQuestion}>Next</button>
        ) : (
          <button className="get-btn active" onClick={showSuggestions}>Get Suggestions</button>
        )}
      </div>
    </div>
  );
};

export default GetStyled;
