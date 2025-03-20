import react from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './assets/Component/navbar/Navbar'
import Mainhero from './assets/Component/MainHero/Mainhero'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainhero />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
