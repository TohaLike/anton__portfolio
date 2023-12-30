import React, { useState } from "react"
import { useSpring, useTrail, animated } from '@react-spring/web'
import AkkError from "../pages/AkkError"
import AntonLogo from "../images/Anton.png"
import Links from "./Links"

const Header: React.FC = () => {
   const [loadedPhoto, setLoadedPhoto] = useState(false)
   const items = ['Anton Malyshev', 'Frontend-developer', 'My work it is developing web-apps and creating UI']

   const fadeInImage = useSpring({
      opacity: loadedPhoto ? 1 : 0,
      config: { duration: 700 },
   })

   const trailHeader = useTrail(items.length, {
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 700 }
   })

   return (
      <>
         <div className="visibility">
            <div className="visibility__logo__container">
               {loadedPhoto && (
                  <animated.img className="visibility__logo" src={AntonLogo} alt="Anton" style={fadeInImage} />
               )}
               <img className="visibility__logo" src={AntonLogo} alt="Anton" style={{ visibility: 'hidden' }} onLoad={() => setLoadedPhoto(true)} />
            </div>

            <div className="visibility__text">
               {trailHeader.map((style, index) => (
                  <animated.div key={index} style={style} className={`text__content__visibility__${index}`}>
                     {items[index]}
                  </animated.div>
               ))}
            </div>

            <div className="links__container">
               <Links />
            </div>
         </div>
      </>
   )
}

export default Header