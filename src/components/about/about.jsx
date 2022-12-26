<<<<<<< HEAD
import React, { Component } from "react";
import "./about.css";

//React Materiliaze
import { Row, Col } from "react-materialize";

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
              Michelle is a RYT (Registered Yoga Teacher) with over 500 hours of training. She completed a 200 hour teacher training in Hot Yoga and Hot Power Fusion as well as a 200 hour teacher training in Power Vinyasa. Later she went on to study Yoga Nidra, Yin Yoga & Kids Yoga.
              </p>
            </Col>
            <Col m={4} s={12}>
              {/* <Icon large>pan_tool</Icon> */}
              <img className="iconImg" src={massageIcon} alt="Om symbol" />

              <h4>Massage</h4>
              <p>
              Michelle lived in Chiang Mai, Thailand for two months at the TTC Spa School and received her 200 hour certificate from the Thai Ministry in Traditional Thai Massage.
              </p>
            </Col>
            <Col m={4} s={12}>
              {/* <Icon large>beach_access</Icon> */}
              <img className="iconImg" src={globeIcon} alt="Om symbol" />
              <h4>Travel</h4>
              <p>
                Michelle has traveled extensively, with teaching experience at resorts including Ylang Ylang Beach Resort and Montezuma Yoga in Costa Rica and PURE gym/spa in Granada.
              </p>
            </Col>
          </section>
        </Row>
      </div>
    );
  }
}

export default About;
=======
import React, { Component } from "react";
import "./about.css";

//React Materiliaze
import { Row, Col } from "react-materialize";

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
              Michelle is a RYT (Registered Yoga Teacher) with over 500 hours of training. She completed a 200 hour teacher training in Hot Yoga and Hot Power Fusion as well as a 200 hour teacher training in Power Vinyasa. Later she went on to study Yoga Nidra, Yin Yoga & Kids Yoga.
              </p>
            </Col>
            <Col m={4} s={12}>
              {/* <Icon large>pan_tool</Icon> */}
              <img className="iconImg" src={massageIcon} alt="Om symbol" />

              <h4>Massage</h4>
              <p>
              Michelle lived in Chiang Mai, Thailand for two months at the TTC Spa School and received her 200 hour certificate from the Thai Ministry in Traditional Thai Massage.
              </p>
            </Col>
            <Col m={4} s={12}>
              {/* <Icon large>beach_access</Icon> */}
              <img className="iconImg" src={globeIcon} alt="Om symbol" />
              <h4>Travel</h4>
              <p>
                Michelle has traveled extensively, with teaching experience at resorts including Ylang Ylang Beach Resort and Montezuma Yoga in Costa Rica and PURE gym/spa in Granada.
              </p>
            </Col>
          </section>
        </Row>
      </div>
    );
  }
}

export default About;
>>>>>>> e2f305291f2b873c7df78aadc2db566a28f209a8
