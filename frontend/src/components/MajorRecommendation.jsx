import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "../styles/MajorRecommendation.css";

function MajorRecommendation() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/questions");
          const data = await res.json();
          setQuestions(data);
          setLoading(false);
        } catch (error) {
          alert('Failed to load questions. Ensure backend server is running.');
           setLoading(false);
        }
      };

      fetchQuestions();
    }, []);

  function handleChange(questionId, optionId) {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all questions.');
      return;
    }

    setSubmitting(true);

    const payload = {
      answers: Object.entries(answers).map(([questionId, answerId]) => ({
        questionId,
        answerId,
      })),
    };

    fetch('http://localhost:5000/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(data => {
        setResult(data.recommendedMajors);
      })
      .catch(() => {
        alert('Failed to get recommendations from the server.');
        setResult(null);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  if (loading) {
    return <div className="loadingText-major">Loading questions...</div>;
  }

  return (
    <div className="bigcontainer-major">
      <Navbar />
      <div className="container-major">
        <header className="header-major">
          <h1 className="title-major">Major Recommendation System</h1>
          <p className="subtitle-major">
            Answer a few questions to get recommended majors based on your interests.
          </p>
        </header>

        <form className="form-major" onSubmit={handleSubmit}>
          {questions.map(question => (
            <div key={question._id} className="questionBox-major">
              <h2 className="questionText-major">{question.question}</h2>
              {question.options.map(option => (
                <label
                  key={option._id}
                  htmlFor={`q${question._id}_opt${option._id}`}
                  className="label-major"
                >
                  <input
                    type="radio"
                    id={`q${question._id}_opt${option._id}`}
                    name={`q-${question._id}`}
                    value={option._id}
                    checked={answers[question._id] === option._id}
                    onChange={() => handleChange(question._id, option._id)}
                    disabled={submitting}
                    className="radioInput-major"
                  />
                  {option.text}
                </label>
              ))}
            </div>
          ))}

          <button
            type="submit"
            disabled={Object.keys(answers).length !== questions.length || submitting}
            className={
              Object.keys(answers).length !== questions.length || submitting
                ? "button-major buttonDisabled-major"
                : "button-major"
            }
          >
            {submitting ? 'Submitting...' : 'Get Recommendations'}
          </button>
        </form>

        {result && (
          <div>
  <div className="resultBox-major">
    <div><strong>Top 3 Recommended Majors:</strong></div>
    <ul className="majorsList">
      {result.slice(0, 3).map((majorObj, idx) => {
        const emojis = ['🥇', '🥈', '🥉'];
        return (
          <li key={idx} className="majorItem">
            {emojis[idx]} {majorObj.major} 
          </li>
        );
      })}
    </ul>
    </div>
    <div className="resultButtons-major">
      <button onClick={() => {
        setAnswers({});
        setResult(null);
      }} className="button-major resetBtn">
        Reset Quiz
      </button>

      <a href="/comparison" className="button-major compareBtn">
        Compare Majors
      </a>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default MajorRecommendation;
