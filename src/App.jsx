import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ChecktProject from './pages/ChecktProject';
import RecWellProject from './pages/RecWellProject';
import AugeneProject from './pages/AugeneProject';
import InnoDProject from './pages/InnoDProject';
import Fun from './pages/Fun';
import About from './pages/About';
import './App.css'


function App() {

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Checkt */}
        <Route path="/checkt" element={<ChecktProject />} />

        {/* Augene */}
        <Route path="/augene" element={<AugeneProject />} />

        {/* InnoD */}
        <Route path="/innod" element={<InnoDProject />} />

        {/* Fun */}
        <Route path="/fun" element={<Fun />} />

        {/* About */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
