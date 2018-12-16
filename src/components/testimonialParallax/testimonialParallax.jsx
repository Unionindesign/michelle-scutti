import React, { Component } from "react";
import "./testimonialParallax.css";

//react-materialize
import { Row, Col, Carousel, Parallax } from "react-materialize";

//images
// import AspenWheel from "../../images/landing-wheelAspens.png";
// import PigeonBack from "../../images/landing-pigeonBack.png";
import Italy from "../../images/italy.png";

class TestimonialParallax extends Component {
  render() {
    return (
      <div className="testimonialParallax">
        <Row>
          <section id="testimonialsSection">
            <div className="parallax-container">
              <Col s={12}>
                <div className="parallax-content">
                  <Col s6={6}>
                    <Carousel
                      className="parallax-content-box"
                      options={{ fullWidth: true, indicators: true }}
                      // fixedItem={
                      //   <h1 className="testimonialHeader">Testimonials</h1>
                      // }
                    >
                      <div className="testimonialBox">
                        <h5 className="testimonialText">
                          "Yoga has been a part of my life for the past seven
                          years. I truly appreciate the method and elegance that
                          Michelle brings to each class. She brings in her
                          experience from all over the world to make each class
                          unique and enlightening. I feel spiritually connected
                          to myself and the yogic practice. She has a grace and
                          patience that allows for those she is guiding to weave
                          in the intentions offered. Michelle encourages in each
                          class an awakened mindfulness that integrates the
                          mind, body, and spirit to become aligned."
                          <br />
                          <span>Michelle W. Denver, CO</span>
                        </h5>
                      </div>
                      <div>
                        <h5 className="testimonialText">
                          "I met Michelle as a studio cleaner doing yoga for
                          trade. I couldn't believe what a sweet soul she
                          had...everytime she was in the room, I could feel this
                          calming energy. I started taking her Hot Power Fusion
                          class and after every class I felt amazing! Her sweet,
                          soft voice helped me get to a calm state and focus my
                          attention internally. She is kind and encouraging - so
                          much so that when she left to teach at a new studio, I
                          drove accross town to continue taking her classes."
                          <br />
                          <span>Cyrstal C.</span>
                        </h5>
                      </div>
                      <div>
                        <h5 className="testimonialText">
                          "Michelle is a natural healer who truly lives her
                          yoga. I met her in Costa Rica and instantly felt
                          welcomed and inspired by her lifestyle. I consistently
                          attended classes with her and my body, mind and spirit
                          found clarity and rejuvenation. I was even fortunate
                          enough to get a Thai massage from her, which was
                          incredible. Her knowledge of the body, yoga, and
                          massage are interwoven in a beautiful way."
                          <br />
                          <span>McKenzie Winter Park, CO</span>
                        </h5>
                      </div>
                    </Carousel>
                  </Col>
                </div>
                <Parallax imageSrc={Italy} style={{ position: "fixed" }} />
              </Col>
            </div>
          </section>
        </Row>
      </div>
    );
  }
}

export default TestimonialParallax;
