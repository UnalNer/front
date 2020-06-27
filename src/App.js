import React, { useState, useCallback } from 'react';
import Sidebar from './layouts/Sidebar/Sidebar';
import Dashboard from './layouts/Dashboard/Dashboard';
import {
  REACT_APP_NER_ENDPOINT,
  REACT_APP_PREDICT_ENDPOINT,
} from './constants'

import './App.css';

function App() {
  const [text, setText] = useState('')
  const [entities, setEntities] = useState(null)
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)
  const onSubmit = useCallback(() => {
    const { REACT_APP_BACKEND_URL } = process.env
    setLoading(true)
    Promise.all([(
      fetch(`${REACT_APP_BACKEND_URL}/${REACT_APP_NER_ENDPOINT}`, {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(res => setEntities(res))
    ), (
      fetch(`${REACT_APP_BACKEND_URL}/${REACT_APP_PREDICT_ENDPOINT}`, {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => setPrediction(res))
    )])
    .finally(() => setLoading(false))
  }, [text])

  return (
    <div className="layout">
      <Sidebar
        text={text}
        setText={setText}
        onSubmit={onSubmit} />
      <Dashboard entities={entities} prediction={prediction} loading={loading}/>
    </div>
  );
}

export default App;
