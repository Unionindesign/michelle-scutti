import React, { Component } from "react";
import "./services.css";

//React Materiliaze
import {
  Row,
  Col,
  Modal,
  Button,
  Tabs,
  Tab,
  Collapsible,
  CollapsibleItem,
  // Icon
} from "react-materialize";

//images
import Tree from "../../images/squareTree.png";
import srvYoga from "../../images/srv-yogaDenaeMichelle.png";
import srvPrivate from "../../images/srv-privateKidMat.png";
import srvMassage from "../../images/srv-Massage.png";
import srvYogaGroup from "../../images/srv-yogaGroup.png";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <Row>
          <section id="servicesSection">
            <h3>Services</h3>
            <Col s={12} l={3}>
              <div className="serviceHero">
                <img src={Tree} alt="Tree" className="serviceCirImg" />
                <p>
                  Michelle cares deeply for your health, happiness, and sense of
                  well being. Yoga sessions with Michelle touch on many aspects
                  of life, and she is here to support you on your journey!
                </p>
                <p>
                  She is an experienced, compassionate teacher, guiding
                  alignment based Vinyasa, Yin, Hot, Nidra, Meditation, and
                  Pranayama.
                </p>
              </div>
            </Col>
            <Col s={12} l={9}>
              <Tabs
                className="tab-demo"
                textClassName="blue-text text-darken-2"
              >
                <Tab title="Yoga" active>
                  <div className="tabContent">
                    <img src={srvYoga} alt="dancer's pose" className="tabImg" />
                    <p>
                      Michelle continues to teach a variety of formats for
                      Purple Yoga, Ra Yoga as well as private lessons. You can
                      learn about the various yoga modalities below:
                    </p>
                    <div className="yogaButtonsBox">
                      <Col s={2}>
                        <Modal
                          header="Vinyasa"
                          trigger={
                            <a className="yogaButton" href="#">
                              Vinyasa
                            </a>
                          }
                        >
                          <p>
                            Vinyasa yoga teaches us to cultivate an awareness
                            that links each action to the next - both on the mat
                            and in our lives. From the Sanskrit ( Sanskrit:
                            विन्यास) "nyasa" - to place - and the prefix "vi" -
                            in a special way - as in the arrangement of music
                            notes or steps along a path to the top of a
                            mountain. This rigourous and often faster paced or
                            "flow" style of yoga allows to you to lose yourself
                            in the practice as you link breath to movement.
                          </p>
                        </Modal>
                      </Col>
                      <Col s={2}>
                        <Modal
                          header="Hot"
                          trigger={
                            <a className="yogaButton" href="#">
                              Hot
                            </a>
                          }
                        >
                          <p>
                            Traditional Hot Yoga is a 90 minutes series of 26
                            postures and 2 breathing exercises. The room is
                            heated to 105 F to help warm muscles, flush toxins
                            and increase circulation. This series systematically
                            moves fresh, oxygenated blood to every cell, working
                            the muscles, bones, tendons, joints, ligaments and
                            glands. These postures work synergistically and
                            cumulatively to bring the mind, body, and spirit to
                            optimal health.
                          </p>
                        </Modal>
                      </Col>
                      <Col s={2}>
                        <Modal
                          header="Yin"
                          trigger={
                            <a className="yogaButton" href="#">
                              Yin
                            </a>
                          }
                        >
                          <p>
                            This practice is designed to stretch the connective
                            tissue around the joints (mainly the knees, pelvis,
                            sacrum and spine). You hold the poses for longer
                            amounts of time, up to six minutes. You will be
                            using little to no muscle engagement, inviting your
                            body to soften into the left side of the body, or
                            Yin-feminine energy.
                          </p>
                        </Modal>
                      </Col>
                      <Col s={2}>
                        <Modal
                          header="Nidra"
                          trigger={
                            <a className="yogaButton" href="#">
                              Nidra
                            </a>
                          }
                        >
                          <p>
                            Yoga nidra (Sanskrit: योग निद्रा) or yogic sleep) is
                            a state of consciousness between waking and
                            sleeping, like the "going-to-sleep" stage. It is a
                            state in which the body is completely relaxed, and
                            the practitioner becomes systematically and
                            increasingly aware of the inner world by following a
                            set of verbal instructions. This state of
                            consciousness is different from meditation in which
                            concentration on a single focus is required. In yoga
                            nidra the practitioner remains in a state of light
                            withdrawal of the 5 senses (pratyahara) with four of
                            his or her senses internalised, that is, withdrawn,
                            and only the hearing still connects to the
                            instructions. The yogic goal of both paths, deep
                            relaxation (yoga nidra) and meditation are the same,
                            a state of meditative consciousness called samadhi
                            or bliss.
                          </p>
                        </Modal>
                      </Col>
                      <Col s={2}>
                        <Modal
                          header="Prenatal"
                          trigger={
                            <a className="yogaButton" href="#">
                              Prenatal
                            </a>
                          }
                        >
                          <p>
                            Prenatal yoga focuses on positions that are
                            specifically designed for pregnant women’s bodies.
                            Common positions in regular yoga — such as those
                            where your feet are spread far apart — may be too
                            stressful for your joints and pelvic area when
                            you’re expecting. As your baby grows, there’s a lot
                            more weight pushing down on your bladder and pelvis.
                            Pregnancy hormones also loosen your ligaments,
                            making joint and bone problems (especially in the
                            pubic bone) a source of discomfort. In addition to
                            modifying positions for pregnancy, prenatal yoga
                            also emphasizes breathing, stretches and
                            strengthening moves that help your body prepare for
                            labor.
                          </p>
                        </Modal>
                      </Col>
                    </div>
                  </div>
                </Tab>
                <Tab title="Massage">
                  <div className="tabContent">
                    <img
                      alt="thai massage"
                      className="tabImg"
                      src={srvMassage}
                    />
                    <p>
                      In 2016, Michelle travelled to Chiang Mai, Thailand, to
                      complete a 3 month immersive program from TTC spa School,
                      earning her certificate from the Thai ministry.
                    </p>
                    <p>
                      Thai Yoga Massage is ancient bodywork practice that is an
                      interactive and unique massage modality developed over
                      many centuries. Also called “Lazy Man’s Yoga” for its use
                      of assisted postures, this method has proven very
                      therapeutic for releasing blockages in energy channels,
                      opening the mind, body and spirit.
                    </p>
                    <p>
                      Michelle has offered private massage at resorts in Costa
                      Rica and here in the US. Sessions are 60 or 90 minutes.
                    </p>
                  </div>
                </Tab>
                <Tab title="Privates">
                  <div className="tabContent">
                    <img alt="kids yoga" className="tabImg" src={srvPrivate} />
                    <Collapsible>
                      <CollapsibleItem
                        header="Private Lesson"
                        icon="accessibility"
                      >
                        Private Individual Class. Choose a location or setup a
                        private session at a public studio. Weekly and monthly
                        packages available.
                      </CollapsibleItem>
                      <CollapsibleItem header="Couples" icon="wc">
                        Learn the practice of yoga as a couple with guided
                        lessons and an intentional series of postures arranged
                        special for your needs and and bodies.
                      </CollapsibleItem>
                      <CollapsibleItem header="Corporate Class" icon="business">
                        For a fun team building activity, or a weekly wind-down,
                        how about a lunchtime or morning yoga session at your
                        place of business?
                      </CollapsibleItem>
                      <CollapsibleItem header="Kids Yoga" icon="face">
                        Get the kids involved and mindful at a young age.
                        Offering small groups and classes with parent. Contact
                        for details on custom yoga mats for kids!
                      </CollapsibleItem>
                      <CollapsibleItem header="Weddings" icon="all_inclusive">
                        Custom series for the Bride, Groom, or Wedding party.
                      </CollapsibleItem>
                    </Collapsible>

                    <h6 style={{ fontStyle: "italic" }}>
                      Currently accepting a private student or couple!
                    </h6>
                  </div>
                </Tab>
                <Tab title="Rates">
                  <div className="tabContent">
                    <img
                      src={srvYogaGroup}
                      className="tabImg"
                      alt="live music class"
                    />
                    <p className="serviceHdr">Rates</p>
                    <p>Please inquire about rates and services for a quote.</p>
                    <p className="serviceHdr">Collaboration</p>
                    <p>
                      Michelle is always interested in collaborating with other
                      teachers for a workshop, organizing or teaching at a yoga
                      event or retreat, or working with musicians for a live
                      music yoga class.
                    </p>
                    <p className="serviceHdr">Barter & Trade</p>
                    <p>
                      Please inquire about trade for services, including Spanish
                      lessons, guitar, belly dancing etc for free yoga lessons!
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </section>
        </Row>
        <Row>
          <Col s={12}>
            <div className="contactGradient">
              <p className="serviceHdr">
                Contact to inquire about rates for services.
              </p>
              <Modal
                header="Contact Michelle"
                bottomSheet
                trigger={<Button style={{ marginTop: "30px" }}>Contact</Button>}
                style={{ textAlign: "center" }}
              >
                Michelle would love to hear from you about collaborations,
                trades, and private yoga and massage sessions.
                <br />
                <br />
                <div>
                  <Button
                    waves="light"
                    node="a"
                    href="mailto:michellescutti@gmail.com"
                  >
                    Email Michelle
                  </Button>
                </div>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;
