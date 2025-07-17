import React, { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = async () => {
    if (!a || !b) {
      alert('Please enter both numbers');
      return;
    }

    const response = await fetch(`https://api.mathjs.org/v4/?expr=${a}%2B${b}`);
    const data = await response.text();
    setResult(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧮 Calculator </h2>
      <input
        type="number"
        placeholder="Enter number A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
