import React from 'react';
import './style.css';

const Navbar = () => {
          return(
              
                    <nav className="navbar navbar-expand-lg navbar-light">
                              <div className="container-fluid">
                                        
                              <a className="navbar-brand " href="#">
                             
                              <img src="images/gig2.png"  alt="" />
                              
                             
                              </a>

                              <button class="navbar-toggler" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto-  mb-2 mb-lg-0">
                              <li className="nav-item">
                              <a className="nav-link " href="#">الرئيسية</a>
                              </li>
                              <li className="nav-item active">
                              <a className="nav-link about-us" href="#about-us">من نحن <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link news" href="#news">    اعمال التصفية </a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link lawyer" href="#lawyer">المصفي القانوني</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link call-us" href="#call-us">اتصل بنا</a>
                              </li>
                              </ul>
                              </div>
                              </div>
                    </nav>
               
          )
}

export default Navbar
