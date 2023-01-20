import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className="md:w-2/3 md:mx-auto">
        <Navbar/>
        <Hero/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage