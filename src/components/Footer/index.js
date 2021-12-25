import React from 'react';
import './style.css';
const map01 = `https://maps.google.com/maps?q=gulf%20investment%20group&t=&z=13&ie=UTF8&iwloc=&output=embed`;

const Footer = () => {
          return(
                    <div id="call-us" className="footer">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6 text-center text-sm-right">
                          <div className="site-info">
                         
                                <div className="mapouter">
                                          <div className="gmap_canvas">
                                                  <iframe width="100%" height="700px" id="gmap_canvas" src={map01}  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>      
                                          </div>
                                 </div>
                          
                          </div>
                        </div>
                        
                        <div className="col-sm-12 col-lg-6 text-center text-sm-right">
                          <div className="contact">
                            <h2>اتصل بنا</h2>
                            <ul className="list-unstyled">
                              <li> <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> <br/>
                                <span> شارع المرقاب الجديد (شارع النصر) – المرقاب مول– مقابل بنك الدوحة
            
                                  المبنى   B –   الطابق الثانى</span>
                            </li>
                              <li> <i className="fa fa-phone  fa-2x"></i> 
                                <br/> <span> 44411500 </span></li>
                              <li><i className="fa fa-envelope-o  fa-2x"> </i>
                                <br/><a href="mailto:info@gig.com.qa?subject=Contact">info@gig.com.qa</a></li>
                              <li> <i className="fa fa-clock-o  fa-2x" aria-hidden="true"></i>
                                  <br/><span>  من الاحد الى الخميس و من الساعة 8 صباحا حتي الساعة 3 مساءا </span></li>
                                  <li> 
                                    <div className="container">
                                      <h2>بيانات مسؤول الابلاغ و الالتزام</h2>
                                                
                                      <table className="table table-responsive table-hover">
                                        
                                        <tbody>
                                          <tr>
                                            <td>الاسم</td>
                                            <td>عبدالحميد شوقي</td>
                                           
                                          </tr>
                                          <tr>
                                            <td>المسمي الوظيفي </td>
                                            <td> مسؤول الابلاغ غن غسل الاموال و مكافحة الارهاب</td>
                                          
                                          </tr>
                                          <tr>
                                            <td>هاتف - مباشر</td>
                                            <td>44259204</td>
                                           
                                          </tr>
                                          <tr>
                                            <td>جوال</td>
                                            <td>70307015</td>
                                            
                                          </tr>
                                          <tr>
                                            <td>فاكس</td>
                                            <td>44651414</td>
                                            
                                          </tr>
            
                                        </tbody>
                                      </table>
                                    </div>
                                  </li>
                                     
                            
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          )
}

export default Footer