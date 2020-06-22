import React from 'react'

import './Sidebar.scss'

export default function Sidebar(props) {
  const { onSubmit } = props
  const [text, setText] = props.textControl
  
  return (
    <div className="sidebar">
      <center>
        <h1>
          COVID-19 Fake News Detector <br />
        </h1>
        <small>Developed by José David Nieto, Juan Carlos Gama, and Viviana Sofía Murillo.</small> <br />
        <br />
        <p>Paste below the content of the news you want to check.</p>
        <textarea 
          id="news-input"
          placeholder="Place your text here..."
          value={text}
          onChange={e => setText(e.target.value)}>
        </textarea>

        <br/>
        <br/>
        <div className="button" onClick={onSubmit}>Send</div>
        <br/>
        <center className="bottom">
          <small>Developed for the "Procesamiento de lenguaje natural" course at Universidad Nacional de Colombia.</small>
        </center>
      </center>
    </div>
  )
}
