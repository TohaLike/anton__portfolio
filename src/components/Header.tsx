import React, { useState } from "react"
import { useSpring, useTrail, animated } from '@react-spring/web'
import AntonLogo from "../images/Anton.png"

const Header: React.FC = () => {
   const [loadedPhoto, setLoadedPhoto] = useState(false)
   const items = ['Anton Malyshev', 'Frontend-developer', 'My work it is developing web-apps and creating UI']
   const itemsLinks = ['GitHub', 'Telegram', 'Twitter', 'Instagram']
   const linkBoks = ['https://github.com/TohaLike', 'https://t.me/smokeonthetower']

   const fadeInImage = useSpring({
      opacity: loadedPhoto ? 1 : 0,
      config: { duration: 700 },
   })

   const trailHeader = useTrail(items.length, {
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 700 }
   })

   const trailHeaderLinks = useTrail(itemsLinks.length, {
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

            <div className="visibility__links">
               {trailHeaderLinks.map((style, index) => (
                  <animated.a href={linkBoks[index]} key={index} style={style} className={`link__block links__content__visibility__${index}`}>
                     {itemsLinks[index]}
                  </animated.a>
               ))}
            </div>
         </div>
      </>
   )
}

export default Header