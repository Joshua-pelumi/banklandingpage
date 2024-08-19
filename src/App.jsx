import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Article from './Components/Article/Article'
import Footer from './Components/Footer/Footer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (

    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        {/* <Title subTitle = 'Our Program' Title= 'What we Offer'/> */}
        <Program/>
        <Article/>
        
      </div>
      
      <Footer/>
    </div>
    
  )
}

export default App
