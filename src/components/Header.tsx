import React from "react"
import { useSpring, useTrail, animated } from "react-spring"
import LogoAnton from "../images/Anton.png"

const Header: React.FC = () => {
   const items = ['Anton Malyshev', 'Frontend-developer', 'BORN: August 6, 2003', 'EMAIL: antonpaper500@gmail.com']

   const fadeInImage = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 700 }
   })

   const trailHeader = useTrail(items.length, {
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 700 }
   })

   return (
      <>
         <div className="visibility">
            <animated.div style={fadeInImage}>
               <div className="visibility__logo__container">
                  <img className="visibility__logo" src={LogoAnton} />
               </div>
            </animated.div>

            <div className="visibility__text">
               {trailHeader.map((style, index) => (
                  <animated.div key={index} style={style} className={`text__content__visibility__${index}`}>
                     {items[index]}
                  </animated.div>
               ))}
            </div>
         </div>
      </>
   )
}

export default Header