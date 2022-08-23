import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import ProjectOne from "./ProjectOne"
import ProjectTwo from "./ProjectTwo"
import ProjectThree from "./ProjectThree"
import ProjectFour from "./ProjectFour"
import Temporary from "./Temporary"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/project/1" element={ <ProjectOne/> } />
          <Route path="/project/2" element={ <ProjectTwo/> } />
          <Route path="/project/3" element={ <ProjectThree/> } />
          <Route path="/project/4" element={ <ProjectFour/> } />
          <Route path="/resume" element={ <Temporary/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App