import React from "react"
import LogoAnton from "../images/Anton.png"
import { useSpring, useTrail, animated } from "react-spring"

const Header: React.FC = () => {
   const fadeIn = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 700 }
   })

   const fadeInTwo = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 900 }
   })

   const fadeInThree = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1100 }
   })

   const fadeInFour = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1300 }
   })

   const items = ['Anton Malyshev', 'Frontend-developer', 'BORN: August 6, 2003', 'EMAIL: antonpaper500@gmail.com']
   // const traiheader = useTrail({})

   return (
      <>
         <div className="visibility">
            <animated.div style={fadeIn}>
               <div className="visibility__logo__container">
                  <img className="visibility__logo" src={LogoAnton} />
               </div>
            </animated.div>
            <div className="visibility__text">
               <animated.div style={fadeIn}>
                  <div className="text__content__visibility__name">Anton Malyshev</div>
               </animated.div>
               <animated.div style={fadeInTwo}>
                  <div className="text__content__visibility__major">Frontend-developer</div>
               </animated.div>
               <animated.div style={fadeInThree}>
                  <div className="text__content__visibility__born">BORN: August 6, 2003</div>
               </animated.div>
               <animated.div style={fadeInFour}>
                  <div className="text__content__visibility__email">EMAIL: antonpaper500@gmail.com</div>
               </animated.div>
            </div>
         </div>
      </>
   )
}

export default Header