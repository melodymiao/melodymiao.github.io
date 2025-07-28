import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DolciMangoProject from './pages/DolciMangoProject';
import MeskiesProject from './pages/MeskiesProject';
import ChecktProject from './pages/ChecktProject';
import MoodTunesProject from "./pages/MoodTunesProject";
import RecWellProject from './pages/RecWellProject';
import KPGProject from './pages/KPGProject';
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

        {/* Dolci Mango */}
        <Route path="/dolci-mango" element={<DolciMangoProject />} />

        {/* Meskies */}
        <Route path="/meskies-ethiopia-restaurant" element={<MeskiesProject />} />

        {/* Checkt */}
        <Route path="/checkt" element={<ChecktProject />} />

        {/* Moodtunes */}
        <Route path="/moodtunes" element={<MoodTunesProject />} />

        {/* RecWell */}
        <Route path="/recwell" element={<RecWellProject />} />

        {/* KPG */}
        <Route path="/kpg" element={<KPGProject />} />

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
