import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import Hero from '../../Components/Hero/Hero'
import Hcatigory from '../../Components/Hcatigory/Hcatigory'
// import Tool from '../../Components/Tool/Tool'
import Footer from '../../Components/Footer/Footer'
import Tool from '../../Components/Tool/Tool'


const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Hcatigory/>
      <Tool/>
      <Footer/>
    </div>
  )
}

export default Home
