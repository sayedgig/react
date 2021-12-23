import React from 'react';
import './style.css';
import slider02 from '../../images/slider02.jpg';
import slider01 from '../../images/slider01.jpg';
import slider03 from '../../images/slider03.jpg';
const Slider = () => {
          return(
              
                    <div className="slider">

                   

                    <div id="main-slider" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <h1>شركة خدمات مالية  <span>تحت التصفية الاختيارية</span> 
                        <br />تنفيذ أوامر بيع أو شراء الأوراق المالية </h1>
                        <div className="overlay"></div>
                        <div className="carousel-item carousel-one active"     
                        style={{backgroundImage: `url(${slider01})`, }}
                        >
                        </div>
                        <div className="carousel-item carousel-two"
                         style={{backgroundImage: `url(${slider02})`, }}
                        >
                        </div>
                        <div className="carousel-item carousel-three"
                         style={{backgroundImage: `url(${slider03})`, }}
                        >
                        </div>
                      </div>
                      <ol className="carousel-indicators">
                        <li data-target="#main-slider" data-slide-to="0" className="active"></li>
                        <li data-target="#main-slider" data-slide-to="1"></li>
                        <li data-target="#main-slider" data-slide-to="2"></li>
                      </ol>


                    </div>
                  </div>
               
          )
}

export default Slider
