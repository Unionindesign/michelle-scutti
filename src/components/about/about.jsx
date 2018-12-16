import React, { Component } from "react";
import "./about.css";

//React Materiliaze
import { Row, Col, Icon } from "react-materialize";

//images
import omIcon from "../../images/iconOm.png";
import massageIcon from "../../images/iconMassage.png";
import globeIcon from "../../images/iconGlobe.png";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Row>
          <section id="about">
            <Col m={4} s={12}>
              {/* <Icon large>mood</Icon> */}
              <img className="iconImg" src={omIcon} alt="Om symbol" />
              <h4>Yoga</h4>
              <p>
                ERYT200 certified yoga instructor. Completed training with
                Corepower yoga for Hot/Bikram series, Power Vinyasa, and studied
                Yoga Nidra with Jeremy Wolf in Denver, CO, and Young Yolks Kids
                Yoga training with Jess Kos Birney.
              </p>
            </Col>
            <Col m={4} s={12}>
              {/* <Icon large>pan_tool</Icon> */}
              <img className="iconImg" src={massageIcon} alt="Om symbol" />

              <h4>Massage</h4>
              <p>
                Certified Thai Yoga massage, certificate from the Thai Ministry
                from TTC Spa School in Chiang Mai, Thailand.
              </p>
            </Col>
            <Col m={4} s={12}>
              {/* <Icon large>beach_access</Icon> */}
              <img className="iconImg" src={globeIcon} alt="Om symbol" />
              <h4>Travel</h4>
              <p>
                Extensive travel and teaching experience at resorts in Costa
                Rica including Ylang Ylang Beach Resort, Montezuma Yoga and PURE
                gym/spa in Granada.
              </p>
            </Col>
          </section>
        </Row>
      </div>
    );
  }
}

export default About;
