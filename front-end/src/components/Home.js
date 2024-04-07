import React, { useState } from 'react';

const Home = () => {
  const [newsContent, setNewsContent] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newsContent }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from backend');
      }

      const data = await response.json();
      setResult(data); // Store the entire result object
    } catch (error) {
      console.error('Error:', error);
      setResult(null); // Set result to null on error
    } finally {
      setLoading(false); // Always reset loading state
    }
  };

  return (
    <>
      <div className={!result ? "newsInput" : 'inputContainer'}>
        <h2>CHECK THE NEWS</h2>
        <textarea
          className='inputBox'
          value={newsContent}
          onChange={(e) => setNewsContent(e.target.value)}
          placeholder="Enter news content"
          required
          disabled={loading}
        />
        <button onClick={handleSubmit} className='appButton' disabled={loading}>
          {loading ? (
            <span>Processing...</span>
          ) : (
            <span>TEST</span>
          )}
        </button>
      </div>

      {result && (
        <div className="resultContainer">
          <p className={result.prediction === 1 ? 'trueNews' : 'fakeNews'}>
            <span>{result.prediction === 1 ? 'TRUE' : 'FAKE'}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
