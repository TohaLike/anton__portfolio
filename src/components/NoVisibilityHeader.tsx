import React from "react"
import { useSpring, animated } from "react-spring"

const NoVisibilityHeader: React.FC = () => {

   const fadeOut = useSpring({
      from: { opacity: 1 },
      to: { opacity: 0 },
      config: { duration: 700 }
   })

   const fadeOutTwo = useSpring({
      from: { opacity: 1 },
      to: { opacity: 0 },
      config: { duration: 900 }
   })

   const fadeOutThree = useSpring({
      from: { opacity: 1 },
      to: { opacity: 0 },
      config: { duration: 1100 }
   })

   const fadeOutFour = useSpring({
      from: { opacity: 1 },
      to: { opacity: 0 },
      config: { duration: 1300 }
   })

   return (
      <>
         <div className="visibility">
            <div className="no__visibility__logo">
               <div className="logo__container"></div>
            </div>

            <div className="no__visibility__text">
               <animated.div style={fadeOut}>
                  <div className="text__content__novisibility__name"></div>
               </animated.div>
               <animated.div style={fadeOutTwo}>
                  <div className="text__content__novisibility__major"></div>
               </animated.div>
               <animated.div style={fadeOutThree}>
                  <div className="text__content__novisibility__born"></div>
               </animated.div>
               <animated.div style={fadeOutFour}>
                  <div className="text__content__novisibility__email"></div>
               </animated.div>
            </div>
         </div>
      </>
   )
}

export default NoVisibilityHeader