import React from 'react';
import './style.css';
import slider02 from '../../images/slider02.jpg';
import slider01 from '../../images/slider01.jpg';
import slider03 from '../../images/slider03.jpg';

const Slider2 = () => {
          return(
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

                        <h1>شركة خدمات مالية  <span>تحت التصفية الاختيارية</span> 
                        <br />تنفيذ أوامر بيع أو شراء الأوراق المالية </h1>
                        <div className="overlay">

                        </div>

              <div className="carousel-item active"
               style={{backgroundImage: `url(${slider01})`, }}
              >
                
              </div>
             
              <div className="carousel-item"
               style={{backgroundImage: `url(${slider02})`, }}
              >
              
              </div>
              <div className="carousel-item"
               style={{backgroundImage: `url(${slider03})`, }}
              >
             
              </div>
            </div>
           
          </div>
          )
}

export default Slider2