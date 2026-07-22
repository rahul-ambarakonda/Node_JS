import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api') // Proxy will redirect this to http://localhost:3001/api
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend says:</h1>
        <p>{message ? message : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;
