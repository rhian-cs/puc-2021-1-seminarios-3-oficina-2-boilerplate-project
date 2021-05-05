import React from 'react'

import './style.css'

const Polaroid = (props) => {
  return (
    <div className="polaroid">
      <img src={props.imgSrc} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  )
}

export default Polaroid
