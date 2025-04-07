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

export default App;



{/**
  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */}

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