import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const AllCards = () => {
  return (
    <React.Fragment>
    <main>
      <div className="pt-40 md:pt-0">
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default AllCards