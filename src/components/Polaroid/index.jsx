import React from 'react'

import './style.css'

const Polaroid = (props) => {
  return (
    <div className="polaroid">
      <img src={props.imgSrc} alt={props.title}/>
      <h3>{props.title}</h3>
      <span className="overflow-dots">
        <p>{props.children}</p>
      </span>
    </div>
  )
}

export default Polaroid
