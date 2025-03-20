import React from 'react'
import HowItWorks from '../HowItWork/Hiw'
import RentalDeals from '../RentDeals/RentDeals'
import WhyChooseUs from '../WhyChooseUs/Wcu'
import FAQ from '../FAQ/Faq'
import Footer from '../Footer/Footer'
import Mainhero from './PublishHero'

const PublishCar = () => {
  return (
    <>
    <Mainhero/>
    <HowItWorks/>
    <RentalDeals/>
    <WhyChooseUs/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default PublishCar
