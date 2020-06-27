import React from 'react'
import Tag from '../../../../components/Tag/Tag'

export default function NERView({ entities }) {
  return (
    <>
    <h3>Recognized entities</h3>
    <div className="ner">
      {entities.map((e, idx) => <Tag key={`NER-Tag-${idx}`} text={e.text} type={e.type}/>)}
    </div>
    </>
  )
}
