import React, { Component } from "react";
import "./gallery.css";

//React Materiliaze
import { Row, Col, MediaBox } from "react-materialize";

//images
import gal1 from "../../images/gal-headStand.png";
import gal2 from "../../images/gal-redRocksSquare.png";
import gal3 from "../../images/gal-revBigToe.png";
import gal4 from "../../images/gal-treePool.png";
import gal5 from "../../images/gal-malaHands.png";
// import gal6 from "../../images/landing-fixedFirmWaves.png";
import gal7 from "../../images/seatedSmile.jpeg";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <Row>
          <section id="gallery">
            <Col s={12}>
              <h3>Gallery</h3>
            </Col>
            <Row>
              <Col s={6} l={3}>
                <MediaBox
                  src={gal1}
                  caption="" //"Headstand on the beach in Playa Grande, Costa Rica. Besos!"
                  className="galImg"
                />
              </Col>
              <Col s={6} l={3}>
                <MediaBox
                  src={gal2}
                  caption="" //"Yoga on the Rocks with Melissa Schacht and Sara Palecki"
                  className="galImg"
                />
              </Col>
              <Col s={6} l={3}>
                <MediaBox
                  src={gal3}
                  caption="" // "Revolved Big Toe Pose in Thailand"
                  className="galImg"
                />
              </Col>
              <Col s={6} l={3}>
                <MediaBox
                  src={gal4}
                  caption="" //"Tree Pose by the pool at Anamaya Resort, Montezuma Costa Rica"
                  className="galImg"
                />
              </Col>
            </Row>
            <Row>
              <Col s={6} l={3}>
                <MediaBox
                  src={gal5}
                  caption="" //"Mala Bead Prayers"
                  className="galImg"
                />
              </Col>
              {/* <Col s={6} l={3}>
                <MediaBox
                  src={gal6}
                  caption="Supta Vidrasana, by the beach in Montezuma Costa Rica"
                  className="galImg"
                />
              </Col> */}
              <Col s={6} l={3}>
                <MediaBox
                  src={gal7}
                  caption="" //"Portrait of Michelle"
                  className="galImg"
                />
              </Col>
            </Row>
          </section>
        </Row>
      </div>
    );
  }
}

export default Gallery;
