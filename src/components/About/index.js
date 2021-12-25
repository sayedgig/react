import React from 'react';
import     {CreativeSection,Creativeinfo,CreativeTitle,CreativeSpan,CreativeDir,InfoDesc,Anchor} from './style.js';
import './style.css'
import Testimonials01 from '../../images/Testimonials01.png';
const About = () => {
     return (
        <CreativeSection>
             <div id="lawyer" class="testimonials">
             <div class="overlay"></div>
                  <div class="container">
                      <div class="carousel-caption">
                      <img src={Testimonials01} alt="..." />
                        <h3>المصفي القانوني</h3>
                        <span>السيد / فهد محمد الانصاري</span>
                        <p>من اكبر و اقدم مكاتب المحاماه في قطر  </p>

                        <a href="http://fmalawfirm.com/ar/" class="card-link">الموقع الالكتروني</a>
                    </div> 
                  </div>  
            </div>
        </CreativeSection>
     );
}

export default About;