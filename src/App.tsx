import NoVisibility from "./components/NoVisibilityHeader"
import Header from "./components/Header"
import Article from "./components/Article"
import { useSpring, animated } from "react-spring"
import './App.css'
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
         </animated.div>
         <animated.div style={fadeInHr}>
            <hr className="line__border_one"></hr>
         </animated.div>
         <Article />
      </div>
   );
}

export default App;
