import React, { Component } from "react";
import "./footer.css";

//React Materiliaze
import { Row, Col, Icon } from "react-materialize";

//images
import insta from "../../images/instalogo.png";
import logo from "../../images/logo-MichelleRose.png";

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerTop">
          <Row>
            <Col s={12} m={6}>
              <img
                className="footerLogo"
                src={logo}
                alt="Wild Rose Yoga Logo"
              />
            </Col>
            <Col s={12} m={6}>
              <h4>Contact:</h4>
              <ul className="footerLinks">
                <li>
                  <Icon tiny>mail</Icon> michellescutti@gmail.com
                </li>
                <li>
                  <Icon tiny>call</Icon> 720-291-1930
                </li>
                <li>
                  <img src={insta} alt="instagram logo icon" />{" "}
                  @Michelle84Mabelle
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="footerBtm">
          <Col m={12}>
            <p>
              &copy; Wild Rose Yoga 2018 | Website by
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://unionindesign.com"
              >
                {" "}
                Union in Design
              </a>
            </p>
          </Col>
        </div>
      </div>
    );
  }
}

export default FooterBottom;
