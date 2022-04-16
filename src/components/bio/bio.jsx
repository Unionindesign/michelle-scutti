import React, { Component } from "react";
import "./bio.css";

//React Materiliaze
import { Row, Col, Parallax } from "react-materialize";

//images
// import bioImg from "../../images/bio-treeGrn.png";
import bioCir from "../../images/bio-sqSmile.png";
import bioParallax from "../../images/bio-beachParallax.png";
//import Sitting from "../../images/landing-seatedSmile.png";

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <Row>
          <section id="bioSection">
            <div className="parallaxContentBio">
              <Col m={12}>
                <div className="bioText">
                  <img className="bioCirImg" src={bioCir} alt="Tree" />
                  <h4 className="sectionTitle">Bio</h4>
                  <hr />
                  <p>
                  Michelle Scutti is a Southern California native raising that good vibration on and off the mat. She stands in her truth and radiantly and authentically shines. She has been practicing yoga for 15 years and teaching for 11 years. Light on her feet, consistent in her optimism and strong in her practice, she completed her first RYT 200 hour training 2011 in Denver, Colorado. Following her dream of adventure and living a more simple life, she moved to Montezuma Costa Rica and offered classes in the style of Vinyasa, Yin and Thai Massage for Montezuma Yoga. She also offered Vinyasa classes at the gorgeous Ylang Ylang Beach Resort and Rancho Delicioso a Permaculture Farm for Anamaya Resort.
                  </p>
                  <p>
                  Now back in Orange County Michelle is offering public and private classes in the style of Hot Power Fusion, Yin Yoga, Hot Yoga, Vinyasa, Meditation, and Kids Yoga. She is humbled to connect with this ancient lineage on a deeper level. Lately she is intrigued by and studying Tantric Vinyasa. Each class explores intelligent Vinyasa sequences guided by principles of alignment, pranayama, meditation, and other techniques for awakening our inner fire and stabilizing the mind. She infuses her classes with compassion, joy, and love. She looks forward to meeting you!

                  </p>
                </div>
              </Col>
            </div>
            <Parallax imageSrc={bioParallax} />
          </section>
        </Row>
      </div>
    );
  }
}

export default Bio;
