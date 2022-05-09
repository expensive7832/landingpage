import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import BigHouse from './assets/bg-houses.png'
import './app.css'
import Services from './component/Services'
import Article from './component/Article'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className="home">
      <Header/>
      <Hero/>

      <img className='bighouseImg' src={BigHouse} alt="design house image" />
      
      <Services/>

      <Article/>

      <Footer/>
    </div>
  )
}

export default App