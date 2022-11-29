import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import "../assest/css/MyDevice.css";
import axios from "axios";
import Cookie from 'js-cookie';
import {  Cookies } from 'react-cookie';

export const NavBar = () => {
  var myCookies = document.cookie
    .split(";")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];

  // const [cookie, setCookie] = useState(myCookies);
  // console.log("first check", cookie);

  const navigate = useNavigate();

  const logout = () => {
    // e.preventDefault()
    // myCookies.remove()
    Cookies.remove('access_token');
    return navigate("/");
  };

  const out = async (e) => {
    // e.preventDefault()
    try {
      var config = {
        method: "post",
        url: "http://localhost:8000/Logout/",
        headers: {},
        withCredentials: true,
      };
      const response = await axios(config);
      console.log(response)
      if (response) {
        // Cookie.remove(myCookies)
        
        
       
        logout();
        
      }
      // console.log(response)
    } catch (err) {
      console.log(err);
    }
  };


  //  const device = ()=>{
  //   navigate("/MyDevice")
  //  }

  return (
    <>
      <Navbar style={{ backgroundColor: "#1e2222" }} variant="dark">
        <Container fluid>
          {/* <Nav style={{ alignContent: "left", alignItems: "left","paddingLeft":"27px" }}> */}
          {/* <a href="MyDevice"> <img className="logo  float-left"  href="/MyDevice" src="download.png" alt="logo" /></a> */}

          {/* </Nav> */}
          {/* <div className="logo float-left">
            <a href="MyDevice">
              {" "}
              <img
                className="logo top-heading"
                style={{ overflow: "hidden", display: "inline-block" }}
                href="/MyDevice"
                src="download.png"
                alt="logo"
              />
             
            </a>
            
          </div>
          <span
                  style={{
                    fontWeight: "bold",
                    textShadow: "inherit",
                    color: "white",
                    fontWeight: "bold",
                    
                  }}
                >
                Impressico Business Solutions
                </span> */}
          {/* <Navbar.Brand   style={{"paddingLeft":"-90px"}}></Navbar.Brand> */}
          <Nav className="me-auto">
            <NavLink to="/ProductList">
              <span
                style={{
                  textShadow: "inherit",
                  color: "#fff",
                  outline: "none",
                  marginLeft: "12vh",
                }}
              >
                Product List
              </span>
            </NavLink>

            <NavLink to={"/MyDevice"}>
              <span className="Navlink" style={{ marginLeft: "2vh" }}>
                My Device
              </span>
            </NavLink>

            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <NavLink
              to={"/"}
              onClick={(e) => {
                out(e);
              }}
            >
              <span  className="Navlink" style={{ marginRight: "12vh" }}>
                Log out
              </span>
            </NavLink>

            {/* <Link to="/">
                <span className="Navlink" style={{"marginRight":"12vh"}}>sign out</span>
              </Link> */}
          </Nav>
          {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            My Device
          </Navbar.Text>
          
          <Navbar.Text>
            Sign out
          </Navbar.Text>
        </Navbar.Collapse> */}
        </Container>
      </Navbar>

      {/* <NavBar>
        
        <Container>
          <Nav className="me-auto">
            <div className="logo float-left">
              <a href="MyDevice">
                {" "}
                <img
                  className="logo top-heading"
                  style={{ overflow: "hidden", display: "inline-block" }}
                  href="/MyDevice"
                  src="download.png"
                  alt="logo"
                />
              
              </a>
              
            </div>
            <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "inherit",
                      color: "white",
                      
                    }}
                  >
                  Impressico Business Solutions
                  </span>

          </Nav>
         
          

        </Container>
        
      </NavBar> */}
    </>
  );
};
