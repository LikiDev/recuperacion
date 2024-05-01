import React, { useState, useEffect } from 'react';

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://meowfacts.herokuapp.com/?count=5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFacts(data.data); 
      } catch (error) {
        setError('Failed to fetch cat facts: ' + error.message);
        console.error('Failed to fetch cat facts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFacts();
  }, []);

  return (
    <div>
      <h2>Cat Facts</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatFacts;
