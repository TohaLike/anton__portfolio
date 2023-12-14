import { useSpring, animated, useTrail } from "react-spring"
import NoVisibility from "./components/NoVisibilityHeader"
import Header from "./components/Header"
import HistoryOne from "./components/historyOne/HistoryOne"
import './App.css'
import 'normalize.css'
import './Adaptive.css'


function App() {
   const fadeInImage = useSpring({
      from: { opacity: 0, height: 'auto' },
      to: { opacity: 1, height: 0 },
      config: { duration: 700 }
   })

   const fadeInContent = useSpring({
      from: { opacity: 0, height: 0 },
      to: { opacity: 1, height: 'auto' },
      config: { duration: 700 }
   })

   const fadeInLine = useSpring({
      opacity: 1,
      from: { opacity: 0, height: 0 },
      config: { duration: 3000 }
   })

   const fadeInArticle = useSpring({
      opacity: 1,
      from: { opacity: 0, height: 0 },
      config: { duration: 3000 }
   })

   return (
      <div className="container">
         <animated.div style={fadeInImage}>
            <NoVisibility />
         </animated.div>
         <animated.div style={fadeInContent}>
            <Header />

            <animated.div style={fadeInLine}>
               <hr className="line__border__one"></hr>
            </animated.div>

            <div className="history__mian__container">
                  <HistoryOne />
            </div>

         </animated.div>
      </div>
   );
}

export default App;
