
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx'
import LetsTalk from "./pages/LetsTalk"
import {Route,Routes} from "react-router-dom"

function App() {
  

  return (
    <div className="bg-[#ecf0f1]">
       <Navbar />
       <Routes>
        <Route path="/BrightLayers" element={<Home />} />
        <Route path="/BrightLayers/LetsTalk" element={<LetsTalk />} />
       </Routes>
      
    </div>
  )
}

export default App
