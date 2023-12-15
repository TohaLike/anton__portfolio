import React from "react"
import { animated, useTrail } from "react-spring"
import Zoom from "react-medium-image-zoom"
import ImageOne from "./images/image1.png"
import ImageTwo from "./images/image2.png"
import ImageThree from "./images/image3.png"
import ImageFour from "./images/image4.png"
import 'react-medium-image-zoom/dist/styles.css'
import "./css/HistoryOne.css"
import "./css/Adaptive.css"

const HistoryOne: React.FC = () => {
   const itemsImage = [`${ImageOne}`, `${ImageTwo}`, `${ImageThree}`, `${ImageFour}`]

   const trailImage = useTrail(itemsImage.length, ({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 700 }
   }))

   return (
      <>
         <div className="history__container">
            <div className="border__container">
               <div className="date__container">
                  <div className="date__year">2023 -</div>
               </div>

               <div className="line__container">
                  <div className="border__dot"></div>
                  <div className="border__line"></div>
               </div>
            </div>

            <div className="text__container">
               <div className="text__title">Employees List</div>
               <div className="main__text">This project was create for organizing and structuring data about employees,
                  projects and tasks. It provides an effective method for management information and provides easier workflow. <div className="title__link">Source code:
                  <a className="link__text" href="https://github.com/TohaLike/mongoDB-test"> https://github.com/TohaLike/mongoDB-test</a></div>
               </div>
            </div>

            <div className="image__container">
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

export default HistoryOne