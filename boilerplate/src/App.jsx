import React from 'react'

// import Heading from './components/Heading'
// import Input from './components/Input'
import Polaroid from './components/Polaroid'

import './app.css'

const App = () => {
  const polaroids = Array(6).fill(
    {
      title: 'Título',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui facilis reiciendis harum. Ad delectus consequatur odit officia doloribus blanditiis minus, expedita sed cum! Neque deserunt cumque voluptatem culpa repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui facilis reiciendis harum. Ad delectus consequatur odit officia doloribus blanditiis minus, expedita sed cum! Neque deserunt cumque voluptatem culpa repellendus?',
      imgSrc: 'https://source.unsplash.com/random/800x600'
    }
  )

  return (
    <>
      {/* <Heading title='Seminários III'>
      Oficina de React
      </Heading> */}
      {/* <Input /> */}
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