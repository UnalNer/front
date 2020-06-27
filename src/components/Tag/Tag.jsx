import React from 'react'

import './Tag.scss'

const Tag = (props) => <div className="tag" title={props.type} >{props.text}</div>

export default Tag