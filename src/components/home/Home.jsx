import React from 'react'
import './Home.css'
import Me from '../../assests/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

function Home() {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={Me} alt="" className="home__img" />
      <h1 className="home__name">Haseeb Ahmad</h1>
      <span className="home__education">Full Stack developer</span>
   
<HeaderSocials />
<a href="#contact" className="btn">Get in touch</a>
<ScrollDown/>
</div>

<Shapes />
   </section>
  )
}

export default Home