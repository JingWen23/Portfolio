import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import ProjectOne from "./ProjectOne"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/project/1" element={ <ProjectOne/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App