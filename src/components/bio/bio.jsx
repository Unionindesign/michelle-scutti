import React, { Component } from "react";
import "./bio.css";

//React Materiliaze
import { Row, Col, Parallax } from "react-materialize";

//images
import bioImg from "../../images/bio-treeGrn.png";
import bioCir from "../../images/bio-sqSmile.png";
import bioParallax from "../../images/bio-beachParallax.png";

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <Row>
          {/* <div className="parallax-container"> */}
          <section id="bioSection">
            <div className="parallaxContentBio">
              <Col l={6} m={12}>
                <div className="bioText">
                  <img className="bioCirImg" src={bioCir} alt="Tree" />
                  <h4 className="sectionTitle">Bio</h4>
                  <hr />
                  <p>
                    Michelle Scutti is a southern California native raising that
                    good vibration in colorful Colorado. She has been practicing
                    yoga for nine years; a transformational experience both
                    physically and mentally. Light on her feet, consistent in
                    her optimism and strong in her practice, Michelle completed
                    her first 200 RYT in 2011. After teaching in Denver a few
                    years, her goal was to spread her light and offer her
                    services internationally. She moved to Montezuma Costa Rica
                    and had the honor of working for Dagmar Spremberg
                    owner/founder of Montezuma Yoga and teaching alongside
                    Silvia Eriksen, Lucy Hamel, and Elena Baraff. She also
                    offered Vinyasa classes alongside Syska Iacono at the
                    gorgeous Ylang Ylang Beach Resort as well as classes at
                    Rancho Delicioso a Permaculture Farm for Anamaya Resort.
                  </p>
                  <p>
                    Now back in Denver she continued her education with another
                    200 RYT training and went on to study Yoga Nidra and Kids
                    Yoga. She offers public and private classes in the style of
                    Vinyasa, Hot, Yin and Nidra. She is humbled to connect with
                    this ancient lineage on a deeper level. She holds a space
                    for her students to let go/soften into the divine feminine
                    and continuously self explore from the inside out. She loves
                    discovering the unique qualities of each individual and
                    looks forward to meeting you!
                  </p>
                </div>
              </Col>
              <Col l={6} m={12}>
                <img
                  className="bioImg"
                  src={bioImg}
                  alt="Michelle doing Tree Pose in Green Bikini"
                />
              </Col>
            </div>
            <Parallax imageSrc={bioParallax} />
          </section>
          {/* </div> */}
        </Row>
      </div>
    );
  }
}

export default Bio;
