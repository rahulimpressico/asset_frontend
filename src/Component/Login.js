import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assest/css/Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const field = useRef();

  useEffect(() => {
    field.current.focus();
  }, []);

  const navigate = useNavigate();

  const Dash = () => {
    navigate("/ProductList");
  };
  const handelInput = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const api = async (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      username: email,
      password: password,
    });
    try {
      var config = {
        method: "post",
        url: "http://localhost:8000/Login/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
        withCredentials: true,
        
      };

      const response = await axios(config);
      // localStorage.setItem('login',JSON.stringify({
      //   token:result.token
      // }))
      console.log(response);
      setEmail("");
      setPassword("");
      if (response) {
        Dash();
        window.history.replaceState(null, null, "/");
      }
      
    } catch (err) {
      setEmail("");
      setPassword("");
      alert("Check Your Username/Password");
      console.log(err.message);
    }
  };

  return (
    <>
      <Container fluid className="login_background">
        <Row></Row>
        <Row className="mt-5">
          <Col md={4}></Col>
          <Col md={4}>
            <Container fluid className="card_bg">
              <Row>
                <Col md={4}></Col>
                <Col md={4}>
                  <div style={{ padding: "20px" }}>
                    <img
                      src="download.png"
                      alt="logo"
                      style={{
                        width: "100%",
                        alignContent: "center",
                        justifyItems: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                </Col>
                <Col md={4}></Col>
              </Row>
              <Row>
                  <Form className="form">
                    <div className="mb-3 text-center">
                      <Form.Label
                        className="form-label "
                        style={{ fontWeight: "bold", paddingBottom: "8px" }}
                      >
                        Login
                      </Form.Label>

                      <Form.Control
                        size="md"
                        type="email"
                        className="fc"
                        id="email"
                        placeholder="Username"
                        value={email}
                        ref={field}
                        onChange={(e) => handelInput(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <Form.Control
                        size="md"
                        type="password"
                        className="fc"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => handelInput(e)}
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <Button
                        variant="primary"
                        size="md"
                        type="button"
                        onClick={(e) => {
                          api(e);
                        }}
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                
              </Row>
            </Container>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
};
