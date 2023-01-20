import React from 'react'
import { CardData4 } from "../data/CardData";

const Card4 = () => {
  return (
    <React.Fragment>
    <main>
      <div className="centered">
        {
          CardData4.map((item, index) => {
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

export default Card4