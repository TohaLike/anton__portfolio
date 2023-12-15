import React from "react"
import { animated, useTrail } from "react-spring"
import Zoom from "react-medium-image-zoom"
import ImageOne from "./images/image1.png"
import ImageTwo from "./images/image2.png"
import ImageThree from "./images/image3.png"
import ImageFour from "./images/image4.png"
import ImageFive from "./images/image5.png"
import 'react-medium-image-zoom/dist/styles.css'
import "./css/HistoryTwo.css"
import "./css/Adaptive.css"

const HistoryTwo: React.FC = () => {
   const itemsImage = [`${ImageOne}`, `${ImageTwo}`, `${ImageThree}`, `${ImageFour}`, `${ImageFive}`]

   const trailImage = useTrail(itemsImage.length, ({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 700 }
   }))

   return (
      <>
         <div className="history__container history__container__two">
            <div className="border__container">
               <div className="date__container">
                  <div className="date__year">2022 -</div>
               </div>

               <div className="line__container">
                  <div className="border__dot"></div>
                  <div className="border__line border__line__two"></div>
               </div>
            </div>

            <div className="text__container">
               <div className="main__text">This project was create special for web-designers and developers. 
               It provides faster and more comfortable way to encode colors in different formats: 
               RGB, HSL and HEX. This allows you to accurately convey the desired shades in digital form. <div className="title__link">Give it a try yourself:
                     <a className="link__text" href="https://tohalike.github.io/"> https://tohalike.github.io/</a></div>
               </div>
            </div>

            <div className="image__container image__container__two">
               {trailImage.map((style, index) => (
                  <animated.div style={style} key={index} className={`image__block__${index}`}>
                     <Zoom>
                        <img
                           className={`items__image items__image__${index}`}
                           src={itemsImage[index]}
                           alt={itemsImage[index]}
                           width={300}
                        />
                     </Zoom>
                  </animated.div>
               ))}
            </div>
         </div>
      </>
   )
}

export default HistoryTwo