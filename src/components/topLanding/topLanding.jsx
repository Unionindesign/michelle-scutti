import React, { Component } from "react";
import "./topLanding.css";

//React Materiliaze
import { Slider, Slide } from "react-materialize";

//images
// import AspenWheel from "../../images/landing-wheelAspens.png";
import FixedFirmWaves from "../../images/landing-fixedFirmWaves.png";
import CostaTrees from "../../images/landing-costaTrees.png";
import TreePose from "../../images/bio-treeGrn.png";
//import Sitting from "../../images/landing-seatedSmile.png";
// import RedRocksBack from "../../images/cpyredrocks.png";
//import MalaHands from "../../images/gal-malaHands.png";

// import PigeonBack from "../../images/landing-pigeonBack.png";

class TopLanding extends Component {
  // state = {
  //   width: window.innerWidth
  // };
  // componentDidMount() {
  //   console.log(
  //     "Window width: ",
  //     window.innerWidth,
  //     "state: ",
  //     this.state.width
  //   );
  //   if (this.state.width < 640) {
  //     this.setState({ width: window.innerWidth / 2 });
  //   }
  // }
  render() {
    return (
      <div className="topLanding">
        <Slider fullscreen className="fullScreen" style={{ height: "100vh" }}>
          <Slide
            src={FixedFirmWaves}
            // width={this.state.width / 2}
            title="Wild Rose Yoga"
          >
            Offering public and private classes
          </Slide>
          <Slide src={CostaTrees} title="Travel.">
            Make time to see the world
          </Slide>
          <Slide src={TreePose} title="Massage.">
            Specializing in Thai Yoga Massage
          </Slide>
        </Slider>
        `
      </div>
    );
  }
}
export default TopLanding;
