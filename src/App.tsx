import NoVisibility from "./components/NoVisibilityHeader"
import Visibility from "./components/Header"
import Test from "./components/Test"
import { useSpring, animated } from "react-spring"
import './App.css';


function App() {
   const fadeOut = useSpring({
      from: { opacity: 0, height: 'auto' },
      to: { opacity: 1, height: 0 },
      config: { duration: 700 }
   })

   const fadeIn = useSpring({
      from: { opacity: 0, height: 0 },
      to: { opacity: 1, height: 'auto' },
      config: { duration: 1000 }
   })


   return (
      <div className="container">
         <animated.div style={fadeOut}>
            <NoVisibility />
         </animated.div>
         <animated.div style={fadeIn}>
            <Visibility />
         </animated.div>

         <Test />
      </div>
   );
}

export default App;
