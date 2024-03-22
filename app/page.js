import React from 'react'
import About from './Components/About'
import Services from './Components/Services'
import OurTeam from './Components/OurTeam'
import ContactUs from './Components/ConatactEmail'
import Hero from './Components/Hero'


function page() {
  return (
    <div className='pt-4'>
      <Hero />
      <About />
      <Services />
      <OurTeam/>
      <ContactUs />
    </div>
  )
}

export default page