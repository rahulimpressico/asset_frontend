import React from "react";
import "../assest/css/MyDevice.css"

export const Footer = () => {

    
  return (
    <>
      <footer className="bg-white text-white mt-3 pt-5">
        {/* <div className="container-fluid"> */}
          <div className="copyright   py-3 mt-5" style={{"backgroundColor":"#000"}}>
            <div className="container-fluid">
              <div className="row mt-2">
                
                <div className="text-center">
                  <small>
                    © Copyright 2022 by Impressico Business Solutions - a CMMi Level 3 Company. All Right Reserved.

                  </small>
                  
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </footer>
    </>
  );
};
