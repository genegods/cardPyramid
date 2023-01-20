import React from 'react'
import AllCards from '../card/AllCards'

const Hero = () => {
  return (
    <React.Fragment>
    <main>
      <div className="bg-green-900 w-full h-screen">
        <AllCards/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default Hero