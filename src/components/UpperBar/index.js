import React from 'react';
import './style.css';
const UpperBar = () => {
          return(
                    <div className="upper-bar">
                              <div className="container-fluid">
                              <div className="row">
                              <div className="info col-sm text-center text-sm-right">
                              <i className="fa fa-phone fa-2x"></i> <span> 44411500</span>
                              <i className="fa fa-envelope-o fa-2x"></i> INFO@GIG.COM.QA
                              </div>
                              <div className="info col-sm text-center text-sm-left">
                              <span className="get-quote">نحن مستعدون لمساعدتك دائما.</span>
                              </div>
                              </div>
                              </div>
                    </div>  
          )
}

export default UpperBar