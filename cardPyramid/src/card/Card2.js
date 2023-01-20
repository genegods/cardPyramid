import React from 'react'
import { CardData2 } from "../data/CardData";

const Card2 = () => {
  return (
    <React.Fragment>
    <main>
      <div className="centered">
        {
          CardData2.map((item, index) => {
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

export default Card2