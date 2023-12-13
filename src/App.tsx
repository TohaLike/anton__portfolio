import { useSpring, animated } from "react-spring"
import { Link, animateScroll as scroll } from "react-scroll"
import NoVisibility from "./components/NoVisibilityHeader"
import Header from "./components/Header"
import SkillsOne from "./components/SkillsOne"
import './App.css'
import 'normalize.css'
import './Adaptive.css'


function App() {
   const fadeOut = useSpring({
      from: { opacity: 0, height: 'auto' },
      to: { opacity: 1, height: 0 },
      config: { duration: 700 }
   })

   const fadeIn = useSpring({
      from: { opacity: 0, height: 0 },
      to: { opacity: 1, height: 'auto' },
      config: { duration: 700 }
   })

   const fadeInHr = useSpring({
      opacity: 1,
      from: { opacity: 0, height: 0 },
      config: { duration: 3000 }
   })

   return (
      <div className="container">
         <animated.div style={fadeOut}>
            <NoVisibility />
         </animated.div>
         <animated.div style={fadeIn}>
            <Header />

            <animated.div style={fadeInHr}>
               <hr className="line__border_one"></hr>
            </animated.div>

            <SkillsOne />

            
         </animated.div>

      </div>
   );
}

export default App;
