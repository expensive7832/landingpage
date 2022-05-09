import React from 'react'
import './article.css'

const Article = () => {
  return (
    <div id='article'>
       <div className="container w-75 m-auto">
       <div className="articleTop mb-3 text-primary">
        <small className="lead">LES</small>
        <h3>ARTICLES</h3>
        
        <div className="row mt-4 m-auto">
          <div className="col-12 col-md-3 immobile">
            <small className='text-align fw-bold text-dark pt-2'>Titre de l`article</small>
            <div className="date ">
                <h6>18 mars 2021 <li><a href="">Immobilier</a></li></h6> 
                
            </div>
            <p className='py-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
          </div>

          <div className="col-12 col-md-3 immobile ">
            <small className='text-align fw-bold text-dark pt-2'>Titre de l`article</small>
            <div className="date ">
                <h6>18 mars 2021 <li><a href="">Immobilier</a></li></h6> 
                
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
          </div>

          <div className="col-12 col-md-3 immobile">
            <small className='text-align fw-bold text-dark pt-2'>Titre de l`article</small><br/>
            <div className="date">
                <h6>18 mars 2021 <li><a href="">Immobilier</a></li></h6> 
                
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
          </div>

          <div className="col-12 col-md-3 immobile ">
            <small className='text-align fw-bold text-dark pt-2'>Titre de l`article</small>
            <div className="date">
                <h6>18 mars 2021 <li><a href="">Immobilier</a></li></h6>
                
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
       </div> 
    </div>
  )
}

export default Article