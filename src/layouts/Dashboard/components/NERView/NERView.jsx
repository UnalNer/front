import React from 'react'
import Tag from '../../../../components/Tag/Tag'

export default function NERView(props) {
  const { entities } = props
  return (
    <div className="ner">
      <h3>Recognized entities</h3>
      {entities.map((e, idx) => <Tag key={`NER-Tag-${idx}`} text={e.text} />)}
    </div>
  )
}
