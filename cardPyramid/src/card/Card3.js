import React from 'react'
import { CardData3 } from "../data/CardData";

const Card3 = () => {
  return (
    <React.Fragment>
    <main>
      <div className="centered">
        {
          CardData3.map((item, index) => {
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

export default Card3