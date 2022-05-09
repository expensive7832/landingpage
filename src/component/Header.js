import React from 'react'
import './header.css'
import Logo from './../assets/logo.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container">
    <a className="navbar-brand d-flex" href="#">
        <img className="logo" src={Logo}/> 
        <h6 className='fw-bold'>BARBE & CIMON NOTAIRES</h6>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">A PROPOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">NOS SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ARTICLES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">EN</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Header