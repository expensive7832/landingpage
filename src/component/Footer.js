import React from 'react'
import './footer.css'
import Logo from './../assets/logo.png'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="container">
        <div className="row pt-4 pb-2 justify-content-center">
            <div className="col-md-4 d-flex">
                <img src={Logo} alt="site logo" />
                <h4>BARBE & CIMON NOTAIRES</h4>
            </div>
            <div className="col-md-4">
                <ul>
                    <li><a href="" className=''>A PROPOS</a></li>
                    <li><a href="">NOS SERVICES</a></li>
                    <li><a href="">ARTICLES</a></li>
                    <li><a href="" >CONTACT</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <small className="text-dark fw-bold">BUREAU</small>
                <address className='py-2' style={{fontSize: ".9rem"}}>101 BOULEVARD SAINT <br/> JOSEPH O, MONTREAL QC, <br/>H2T 2P7</address>
                <small className="text-dark fw-bold">NOUS SUIVRE</small>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer