import React, { Component } from "react";
import "./App.css";

//components
import HeaderNav from "./components/headerNav/headerNav";
import TopLanding from "./components/topLanding/topLanding";
import Bio from "./components/bio/bio";
import TestimonialParallax from "./components/testimonialParallax/testimonialParallax";
import Schedule from "./components/schedule/schedule";
import About from "./components/about/about";
import Services from "./components/services/services";
import Gallery from "./components/gallery/gallery";
import FooterBottom from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <TopLanding />
        <About />
        <Bio />
        <Schedule />
        <Services />
        <TestimonialParallax />
        <Gallery />
        <FooterBottom />
      </div>
    );
  }
}

export default App;
