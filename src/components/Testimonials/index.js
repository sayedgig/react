import React from 'react';
import './style.css';
import Testimonials01 from '../../images/Testimonials01.png';
import Testimonials02 from '../../images/Testimonials02.png';

const Testimonials = () => {
          return(
              
            <div id="lawyer" className="testimonials">
            <div className="overlay"></div>
            <div className="container">
              <div id="testimonials" className="carousel slide" data-ride="carousel">
               
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption d-none d-block">
                      <img src="img/logo-header.png" alt="..." />
                      <h3>المصفي القانوني</h3>
                      <span>السيد / فهد محمد الانصاري</span>
                      <p>من اكبر و اقدم مكاتب المحاماه في قطر  </p>
                      
                   
    
                      <a href="http://fmalawfirm.com/ar/" className="card-link">الموقع الالكتروني</a>
                    </div>
                  </div>
                 
                </div>
                
              </div>
            </div>
          </div>
               
          )
}

export default Testimonials
