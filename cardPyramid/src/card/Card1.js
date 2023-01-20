import React from 'react'
import { CardData1 } from "../data/CardData";

const Card1 = () => {
  return (
    <React.Fragment>
    <main>
      <div className="centered">
        {
          CardData1.map((item, index) => {
            return(
              <div key={index}>
                <div>
                <img src={item.img} alt="media" className="cardImg" />
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  </React.Fragment>
  )
}

export default Card1