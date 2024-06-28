import React from 'react'
import Hero from './Components/Hero/hero'
import Navbar from './Components/Navbar/Navbar'
import Venues from './Components/Venues/venues'
import Title from './Components/Title/title'
import About from './Components/About/about'
import Specials from './Components/Specials/Specials'

import Testimonials from './Components/Testimonials/Testimonials'

import Contact from './Components/Contact us/Contact'

import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <div className="container">
     <Title subTitle='Our Venues' title='What We Offer'/>
     <Venues/>
     <About />
     <Title subTitle="Gallery" title='Specials'/>
     <Specials/>
     <Title subTitle="Hear from clients" title='Testimonials'/>
     <Testimonials/>
     <Title subTitle="Enquire" title='Contact us'/>

     <Contact/>
     <Footer/>
     </div>

    </div>
  );
}

export default App;
