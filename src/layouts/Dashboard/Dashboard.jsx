import React from 'react'

import NERView from './components/NERView/NERView'
import PredictionView from './components/PredictionView/PredictionView'

import './Dashboard.scss'

// export default function Dashboard(props) {
//   const { entities } = props
//   console.log(entities);
  
//   return (
//     <div id="dashboard">
//       {entities
//       ? <div className="active">
//         <h3>Recognized entities</h3>
//         {entities.map(e => <Tag text={e.text} />)}
//       </div>
//       : <div className="idle">
//         <p>Send us a COVID-19 related text so we can verify its veracity.</p>
//       </div>}
//     </div>
//   )
// }

export default function Dashboard(props) {
  const { entities, prediction } = props
  
  return (
    <div id="dashboard">
      {!entities && !prediction
      ? <div className="idle">
        <p>Send us a COVID-19 related text so we can verify its veracity.</p>
      </div>
      : <div className="active">
        { prediction ? <PredictionView prediction={prediction} /> : '' }
        <br/>
        { entities ? <NERView entities={entities} /> : '' }
      </div>}
    </div>
  )
}
