import react from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './assets/Component/navbar/Navbar'
import Mainhero from './assets/Component/MainHero/Mainhero'
import PublishCar from './assets/Component/PublishCar/PublishCar'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainhero />} />
        <Route path="/PublishyourVehicle" element={<PublishCar />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
