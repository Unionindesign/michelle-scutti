import React, { Component } from "react";
import "./topLanding.css";

//React Materiliaze
import { Slider, Slide } from "react-materialize";

//images
import AspenWheel from "../../images/landing-wheelAspens.png";
import FixedFirmWaves from "../../images/landing-fixedFirmWaves.png";
import CostaTrees from "../../images/landing-costaTrees.png";
// import PigeonBack from "../../images/landing-pigeonBack.png";

class TopLanding extends Component {
  render() {
    return (
      <div className="topLanding">
        <Slider fullscreen className="fullScreen" style={{ height: "100vh" }}>
          <Slide src={FixedFirmWaves} title="Wild Rose Yoga">
            Offering public and private classes
          </Slide>
          <Slide src={CostaTrees} title="Travel.">
            Make time to see the world
          </Slide>
          <Slide src={AspenWheel} title="Massage.">
            Specializing in Thai Yoga Massage
          </Slide>
        </Slider>
      </div>
    );
  }
}

export default TopLanding;
