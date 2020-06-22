import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

function App() {
  const [text, setText] = useState('')
  const [response, setResponse] = useState(null)

  const { REACT_APP_BACKEND_URL } = process.env

  const onSubmit = () => {
    fetch(REACT_APP_BACKEND_URL)
    .then(res => res.json())
    .then(res => setResponse(res))
  }

  return (
    <div className="layout">
      <Sidebar 
        textControl={[text, setText]}
        onSubmit={onSubmit} />
      <Dashboard />
    </div>
  );
}

export default App;
