import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./Navbar";
// import Table from "react-bootstrap/Table";
import "../assest/css/MyDevice.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ProductList = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo float-left">
                <a href="MyDevice">
                  {" "}
                  <img
                    className="logo top-heading"
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      paddingTop: "13px",
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
            </div>
            <div className="col-md-6">
              <div
                style={{
                  fontWeight: "bold",
                  textShadow: "inherit",
                  color: "#000",
                  marginTop: "64px",
                  marginLeft: "55vh",
                }}
              >
                Product List
              </div>
            </div>
          </div>
          <hr />
          {/* <div className="row">
          <h3 className="h3"> My Device </h3>
        </div> */}
          {/* <div className="row mt-5"></div>
        <div className="row mt-5"></div> */}
          <div className="row mt-5">
            <div className="col-md-4">
              <div>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://5.imimg.com/data5/JY/DE/MY-55122030/cctv-camera-500x500.jpg"
                  />

                  <Card.Body>
                    <div style={{ textAlign: "justify" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Logitech B100 Wired Optical Mouse (USB, Black)
                      </span>
                      <br />
                      <br />
                      <span style={{ fontWeight: "bold" }}>
                        Description -:
                      </span>{" "}
                      You can plug the Logitech B100 wired optical mouse into
                      the USB port of your computer or laptop, and it will be
                      ready for use. It sports an ambidextrous design that lets
                      both right- and left-handed users use it conveniently.
                      Plus, its robust build ensures a reliable lifespan.
                    </div>

                    <div className="d-grid gap-2">
                      <Button style={{ marginTop: "9px" }} variant="primary">
                        Request
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://www.sony.co.in/image/57f06d3e66ee7ef1a085e16c5e45bc40?fmt=png-alpha&wid=660&hei=660"
                  />
                  <Card.Body>
                    <span style={{ fontWeight: "bold" }}>
                      SONY WH-CH710N Active noise cancellation enabled Bluetooth
                      Headset (Blue, On the Ear)
                    </span>
                    <br />
                    <br />
                    <div style={{ textAlign: "justify" }}>
                      <span style={{ fontWeight: "bold" }}>Description -:</span>{" "}
                      You can plug the Logitech B100 Drown away all the ambient
                      noise and groove to your favorite songs without any
                      disturbance by getting the Sony WH-CH710N Wireless
                      Noise-canceling Headphones.
                    </div>

                    <div className="d-grid gap-2">
                      <Button style={{ marginTop: "9px" }} variant="primary">
                        Request
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/14/08efcff7-5e74-49c4-a89a-05dab35b2be3.jpg"
                  />
                  <Card.Body>
                    <div style={{ textAlign: "justify" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        ASUS VivoBook 15 (2022) Core i3 10th Gen - (8 GB/512 GB
                        SSD/Windows 11 Home) X515JA-EJ362WS
                      </span>
                      <br />
                      <br />
                      <span
                        style={{ fontWeight: "bold", textAlign: "justify" }}
                      >
                        Description -:{" "}
                      </span>
                      The outstanding Asus VivoBook 15 laptop, created to
                      simplify your workday and improve performance, offers
                      fantastic efficiency and stunning aesthetics.
                    </div>

                    <div className="d-grid gap-2">
                      <Button style={{ marginTop: "8px" }} variant="primary">
                        Request
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://5.imimg.com/data5/JY/DE/MY-55122030/cctv-camera-500x500.jpg"
                  />

                  <Card.Body>
                    <div style={{ textAlign: "justify" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Logitech B100 Wired Optical Mouse (USB, Black)
                      </span>
                      <br />
                      <br />
                      <span style={{ fontWeight: "bold" }}>
                        Description -:
                      </span>{" "}
                      You can plug the Logitech B100 wired optical mouse into
                      the USB port of your computer or laptop, and it will be
                      ready for use. It sports an ambidextrous design that lets
                      both right- and left-handed users use it conveniently.
                      Plus, its robust build ensures a reliable lifespan.
                    </div>

                    <div className="d-grid gap-2">
                      <Button style={{ marginTop: "9px" }} variant="primary">
                        Request
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://www.sony.co.in/image/57f06d3e66ee7ef1a085e16c5e45bc40?fmt=png-alpha&wid=660&hei=660"
                  />
                  <Card.Body>
                    <span style={{ fontWeight: "bold" }}>
                      SONY WH-CH710N Active noise cancellation enabled Bluetooth
                      Headset (Blue, On the Ear)
                    </span>
                    <br />
                    <br />
                    <div style={{ textAlign: "justify" }}>
                      <span style={{ fontWeight: "bold" }}>Description -:</span>{" "}
                      You can plug the Logitech B100 Drown away all the ambient
                      noise and groove to your favorite songs without any
                      disturbance by getting the Sony WH-CH710N Wireless
                      Noise-canceling Headphones.
                    </div>

                    <div className="d-grid gap-2">
                      <Button style={{ marginTop: "9px" }} variant="primary">
                        Request
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/14/08efcff7-5e74-49c4-a89a-05dab35b2be3.jpg"
                  />
                  <Card.Body>
                    <div style={{ textAlign: "justify" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        ASUS VivoBook 15 (2022) Core i3 10th Gen - (8 GB/512 GB
                        SSD/Windows 11 Home) X515JA-EJ362WS
                      </span>
                      <br />
                      <br />
                      <span
                        style={{ fontWeight: "bold", textAlign: "justify" }}
                      >
                        Description -:{" "}
                      </span>
                      The outstanding Asus VivoBook 15 laptop, created to
                      simplify your workday and improve performance, offers
                      fantastic efficiency and stunning aesthetics.
                    </div>

                    <div className="d-grid gap-2">
                      <Button style={{ marginTop: "8px" }} variant="primary">
                        Request
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
