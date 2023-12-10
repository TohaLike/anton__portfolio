import { useTrail, animated } from "react-spring"

const Article: React.FC = () => {
   const itemsBlock = ['', '', '', '']

   const trailBlock = useTrail(itemsBlock.length, {
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 700 }
   })

   return (
      <>
         <div className="block__container">
            {trailBlock.map((style, index) => (
               <animated.div style={style} key={index} className={`block__main block__${index}`}>
                  {itemsBlock[index]}
               </animated.div>
            ))}
         </div>
      </>
   )
}

export default Article