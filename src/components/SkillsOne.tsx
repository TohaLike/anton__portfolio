import React from "react"
import { useTrail, animated, useSpring } from "react-spring"
import Zoom from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css'
import PageOne from "../images/image1.png"
import PageTwo from "../images/image2.png"
import PageThree from "../images/image3.png"
import PageFour from "../images/image4.png"



const SkillsOne: React.FC = () => {
   const itemsImage = [`${PageOne}`, `${PageTwo}`, `${PageThree}`, `${PageFour}`]

   const trailBlock = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 700 }
   })

   const trailImage = useTrail(itemsImage.length, {
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 700 }
   })

   return (
      <>
         <div className="block__container">
            <animated.div style={trailBlock} className={'visibility__skills'}>
               <div className="line__block">
                  <div className="date__block">
                     <div className={'block__date block__border__date'}>2023</div>
                     <div className={'block__dash block__border__dash'}>-</div>
                  </div>

                  <div className="line__border">
                     <div className={'block__ball block__border__ball'}></div>
                     <div className={'block__border block__border__line'}></div>
                  </div>
               </div>

               <div className="text__content">
                  <div className={'block__text text__content__block'}>This project was create for organizing and structuring data about employees, projects and tasks. He provides an effective method for management information and provides easier workflow.</div>

                  <div className="link__content">
                     <p className={'link__title link__title'}>Source code:</p>
                     <a className={'block__link link__content__block'} href={'https://github.com/TohaLike/mongoDB-test'}>https://github.com/TohaLike/mongoDB-test</a>
                  </div>
               </div>
               <div className={'block__image'}>
                  {trailImage.map((style, index) => (
                     <animated.div style={style} key={index} className={`block__main__${index}`}>
                        <Zoom>
                           <img
                              key={index}
                              src={itemsImage[index]}
                              className={'block__image__main'}
                              width={240}
                           />
                        </Zoom>
                     </animated.div>
                  ))}
               </div>
            </animated.div>
         </div >
      </>
   )
}

export default SkillsOne