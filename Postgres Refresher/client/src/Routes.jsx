import { Routes, Route } from "react-router-dom";
import AddTutorial from "./components/AddTutorial"
import Tutorial from "./components/Tutorial"
import TutorialsList from "./components/TutorialsList"

const RouteLinks = () =>{
  return(
    <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList/>} />
          <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial/>} />
        </Routes>
      </div>
  )
}

export default RouteLinks
