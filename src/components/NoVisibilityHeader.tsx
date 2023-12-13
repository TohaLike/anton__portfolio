import React from "react"
import { useSpring, animated, useTrail } from '@react-spring/web'

const NoVisibilityHeader: React.FC = () => {
   const items = ['', '', '', '']

   const fadeOut = useSpring({
      opacity: 0,
      from: { opacity: 1 },
      config: { duration: 700 }
   })

   const trailFadeOut = useTrail(items.length, {
      opacity: 0,
      from: { opacity: 1 },
      config: { duration: 700 }
   })

   return (
      <>
         <div className="visibility">
            <animated.div style={fadeOut}>
               <div className="no__visibility__logo">
                  <div className="logo__container"></div>
               </div>
            </animated.div>

            <div className="no__visibility__text">
               {trailFadeOut.map((style, index) => (
                  <animated.div key={index} style={style} className={`text__content__novisibility__${index}`}>
                     {items[index]}
                  </animated.div>
               ))}
            </div>

            
         </div >
      </>
   )
}

export default NoVisibilityHeader