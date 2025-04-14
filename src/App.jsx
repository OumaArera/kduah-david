import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from 'react'
import './App.css'
import KduahConsultLandingPage from "./components/layouts/Layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<KduahConsultLandingPage />} />
        {/* <Route path="/bothel" element={<BothellSerenityBrochure />} />
        <Route path="/edmonds" element={<EdmondsAFHBrochure />} /> */}

      </Routes>
    </Router>
  )
}

export default App
