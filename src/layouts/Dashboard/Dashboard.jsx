import React from 'react'

import './Dashboard.scss'
import Tag from '../../components/Tag/Tag';

export default function Dashboard(props) {
  const { entities } = props
  console.log(entities);
  
  return (
    <div id="dashboard">
      {entities
      ? <div className="active">
        <h3>Recognized entities</h3>
        {entities.map(e => <Tag text={e.text} />)}
      </div>
      : <div className="idle">
        <p>Send us a COVID-19 related text so we can verify its veracity.</p>
      </div>}
    </div>
  )
}
