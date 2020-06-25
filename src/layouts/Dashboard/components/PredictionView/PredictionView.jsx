import React from 'react'

export default function PredictionView(props) {
  const { prediction } = props
  return (
    <div className="prediction">
      <h3>Predicción final</h3>
      {prediction}
    </div>
  )
}
