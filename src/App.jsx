import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DolciMangoProject from './pages/DolciMangoProject';
import MeskiesProject from './pages/MeskiesProject';
import ChecktProject from './pages/ChecktProject';
import MoodTunesProject from "./pages/MoodTunesProject";
import RecWellProject from './pages/RecWellProject';
import KPGProject from './pages/KPGProject';
import './App.css'

//import styled from 'styled-components';


function App() {
  const [count, setCount] = useState(0)

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
      </Routes>
    </>
  )
}

export default App
