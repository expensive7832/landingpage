import React from 'react'
import './hero.css'
import heroImg from './../assets/pen.png'

const Hero = () => {
  return (
    <div className='hero container-fluid px-md-5'>
        <div className="d-md-flex justify-content-between align-items-center">
            <div className="wording">
                <small className="">NOUS VALORISONS LA</small>
                <h3>CLARTE  <i class="fa-solid fa-1x fa-angle-right"></i></h3>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis beatae voluptatem doloribus
                     voluptatum non tenetur nulla, architecto cum impedit. voluptatum non tenetur nulla, architecto cum impedit.
                </p>
                <button className="btn btn-lg">En savoir plus</button>
            </div>
            <div className="heroImg">
                <img src={heroImg} className="img-fluid" alt="hero image design"  />
            </div>
        </div>
    </div>
  )
}

export default Hero