import React from 'react'
import './services.css'

const Services = () => {
  return (
    <div id='services'>
       <div className="container">
       <div className="serviceTop mb-3 text-primary">
        <small className="lead">NOS</small>
        <h3>SERVICES</h3>
      </div>
      <div className="row">
          <div className="col-12 col-md-4 my-1 my-md-0 corporate  py-4 ">
            <p className='text-align'>COPROPRIETE <i class="fa-solid fa-1x fa-angle-right"></i></p>
          </div>
          <div className="col-12 col-md-4 my-1 my-md-0 family py-4  ">
            <p className='text-align'>PLANIFICATION <br/> FAMILIALE <i class="fa-solid fa-1x fa-angle-right"></i></p>
          </div>
          <div className="col-12 col-md-4 my-1 my-md-0 immobile py-4 ">
            <p className='text-align'>IMMOBILIER <i class="fa-solid fa-1x fa-angle-right"></i></p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Services