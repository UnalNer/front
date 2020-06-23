import React, { useState } from 'react';
import Sidebar from './layouts/Sidebar/Sidebar';
import Dashboard from './layouts/Dashboard/Dashboard';

import './App.css';

function App() {
  const [text, setText] = useState('')
  const [entities, setEntities] = useState(null)

  const { REACT_APP_BACKEND_URL,
    REACT_APP_NER_ENDPOINT } = process.env

  const onSubmit = () => {    
    fetch(REACT_APP_BACKEND_URL + REACT_APP_NER_ENDPOINT)
    .then(res => res.json())
    .then(res => setEntities(res))
  }  

  return (
    <div className="layout">
      <Sidebar 
        textControl={[text, setText]}
        onSubmit={onSubmit} />
      <Dashboard entities={entities}/>
    </div>
  );
}

export default App;
