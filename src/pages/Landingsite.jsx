import React from 'react'
import Landing from '../components/landing/Landing';
import Services from '../components/services/Services';
import About from '../components/about/About';
import Process from '../components/prozess/Process';
import Portfolio from '../components/portfolio/Main/Portfolio';
import Navbar from '../components/navBar/NavBar';
import ParticlesBackground from '../components/ParticlesBackground';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';

const Landingsite = () => {
  return (
    <div className='App'>
      <Navbar />
      <ParticlesBackground />
      <Landing />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Landingsite