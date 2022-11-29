import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { NavBar } from "./Navbar";
import "../assest/css/MyDevice.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Table from "react-bootstrap/Table";

export const MyDevice = () => {
  const [details, setDetails] = useState([]);
  var myCookies =document.cookie.split(';').find((row) => row.startsWith('access_token'))
    ?.split('=')[1];
    console.log("cokiee",myCookies)

  const api = async () => {
    
    // const authHeader = request.cookies.access_token;
    // console.log(authHeader)
    var data = "";
    try {
      var config = {
        method: "get",
        url: "http://localhost:8000/Asset/",
        headers: {
          Accept: "application/json",
          // "Content-Type": "application/json",
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Token + ${myCookies}`, 
          // "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NjI1MDg4LCJpYXQiOjE2Njk2MjUwODAsImp0aSI6IjYxZTUzYmRiMzk5MDRlMzY4ZTk5ZTRjMGZkNWUxZTZjIiwidXNlcl9pZCI6MX0.eXP1zgYMtGSVIyCeIV50igcajq2RKBbMYO7xufhlFY0",
        },
        withCredentials: true,
        data: data,
        
        
      };

      const response = await axios(config);
      const info = response.data;
      console.log("resp", info);
      // console.log(response.json())
      setDetails([...info]);
      console.log("state", details);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <Row className="pt-2">
          <Col md={2}>
            <div className="logo float-left">
              <a href="MyDevice">
                {" "}
                <img
                  className="logo top-heading"
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    paddingTop: "5px",
                  }}
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
                color: "#000",
              }}
            >
              Impressico Business Solutions
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="mt-5">
          <h3> My Device </h3>
        </Row>
        <Row className="mt-2">
          <Container fluid className="Devicecard_bg">
            <Row className="info_bg pt-3">
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>Asset Name</th>
                    <th>Model Number</th>
                    <th>Asset Company</th>
                    <th>Serial Number</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((e) => {
                    return (
                      <tr>
                        <td>{e.asset_name}</td>
                        <td>{e.model_number}</td>
                        <td>{e.asset_company}</td>
                        <td>{e.serial_number}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </Container>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
