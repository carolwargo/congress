import { useState } from 'react';
import SopoeaChart from './components/SopoeaChart';
import SopoeaTable from './components/SopoeaTable';
import sopoeaData from './data/data.json'; // Import static JSON
import './App.css';

function App() {
  const [data] = useState(sopoeaData); // Set data directly from JSON

  return (
    <div className="app">
      <h1>SOPOEA Funding (2010–2025)</h1>
      <SopoeaChart data={data} />
      <SopoeaTable data={data} />
    </div>
  );
}

export default App;



{/**
import { useEffect, useState } from 'react';
import axios from 'axios';
import SopoeaChart from './components/SopoeaChart';
import SopoeaTable from './components/SopoeaTable';
import './App.css';

function App() {
  const [sopoeaData, setSopoeaData] = useState([]);

  useEffect(() => {
    axios.get('/api/sopoea')
      .then(response => setSopoeaData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <h1>SOPOEA Funding (2010–2025)</h1>
      <SopoeaChart data={sopoeaData} />
      <SopoeaTable data={sopoeaData} />
    </div>
  );
}

export default App;  */}