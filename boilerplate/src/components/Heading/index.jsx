import React from 'react'

import './styles.css'

const Heading = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.children}</h3>
      <hr/>
    </>
  )
}

export default Heading