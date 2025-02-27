import react from 'react'
import './App.css'
import HowItWorks from './assets/Component/HowItWork/Hiw'
import WhyChooseUs from './assets/Component/WhyChooseUs/Wcu'
import FAQ from './assets/Component/FAQ/Faq'
import Footer from './assets/Component/Footer/Footer'
import Navbar from './assets/Component/navbar/Navbar'
import RentalDeals from './assets/Component/RentDeals/RentDeals'
import Hero from './assets/Component/Hero/Hero'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <HowItWorks/>
     <RentalDeals/>
     <WhyChooseUs/>
     <FAQ/>
     <Footer/>
    </>
  )
}

export default App
