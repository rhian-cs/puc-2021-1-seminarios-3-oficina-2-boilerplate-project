import React from 'react'
import { loremIpsum } from 'lorem-ipsum'

import Polaroid from './components/Polaroid'

import './app.css'

const App = () => {
  const polaroids = Array(6).fill(0).map(() => {
    return {
      title: loremIpsum({ count: 3, units: "words" }),
      description: loremIpsum({ count: 2 }),
      imgSrc: `https://source.unsplash.com/random/800x600?seed=${12345678*Math.random()}`
    }
  })

  console.log(polaroids);

  return (
    <>
      <div className="container">
        {
          polaroids.map((polaroid, index) => {
            return (
              <Polaroid key={index} imgSrc={polaroid.imgSrc} title={polaroid.title} >
                {polaroid.description}
              </Polaroid>
            )
          })
        }
      </div>
    </>
  )
}

export default App