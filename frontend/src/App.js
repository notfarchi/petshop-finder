import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [smallDogs, setSmallDogs] = useState(0);
  const [largeDogs, setLargeDogs] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Date submitted:', date); 
    console.log('Small Dogs submitted:', smallDogs); 
    console.log('Large Dogs submitted:', largeDogs); 

    if (smallDogs < 0 || largeDogs < 0) {
      alert('Please enter a valid number of dogs. Negative values are not allowed.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5555/calculate', {
        date,
        smallDogs,
        largeDogs,
      });
      setResult(response.data);
    } catch (error) {
      alert('Error calculating the best petshop. Please try again.');
      console.error('Error calculating the best petshop:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Small Dogs:
          <input type="number" value={smallDogs} onChange={(e) => setSmallDogs(Number(e.target.value))} required />
        </label>
        <label>
          Large Dogs:
          <input type="number" value={largeDogs} onChange={(e) => setLargeDogs(Number(e.target.value))}  required />
        </label>
        <button type="submit">Find Best Petshop</button>
      </form>
      {result && (
        <div>
          <h2>Best Petshop: {result.name}</h2>
          <p>Total Price: <b>R${result.price}</b></p>
        </div>
      )}
    </div>
  );
}

export default App;