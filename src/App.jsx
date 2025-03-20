import react from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './assets/Component/navbar/Navbar'
import Mainhero from './assets/Component/MainHero/Mainhero'
import PublishCar from './assets/Component/PublishCar/PublishCar'
import PublishForm from './assets/Component/PublishForm/PublishForm'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainhero />} />
        <Route path="/publishform" element={<PublishCar />} />
        <Route path="/publishform/:userId" element={<PublishForm/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
