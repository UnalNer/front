import React, { useState } from 'react';
import Sidebar from './layouts/Sidebar/Sidebar';
import Dashboard from './layouts/Dashboard/Dashboard';

import './App.css';

function App() {
  const [text, setText] = useState('')
  const [entities, setEntities] = useState(null)
  const [prediction, setPrediction] = useState(null)

  const { REACT_APP_BACKEND_URL,
    REACT_APP_NER_ENDPOINT,
    REACT_APP_PREDICT_ENDPOINT } = process.env

  const onSubmit = () => {    
    fetch(REACT_APP_BACKEND_URL + REACT_APP_NER_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => setEntities(res))

    fetch(REACT_APP_BACKEND_URL + REACT_APP_PREDICT_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => setPrediction(res))
  }

  console.log(prediction);
  
  return (
    <div className="layout">
      <Sidebar 
        textControl={[text, setText]}
        onSubmit={onSubmit} />
      <Dashboard entities={entities} prediction={prediction} />
    </div>
  );
}

export default App;
