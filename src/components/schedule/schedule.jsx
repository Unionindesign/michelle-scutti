import React from "react";
import "./schedule.css";

//React Materialiaze
import { Row, Col } from "react-materialize";

//images
// import Corepower from "../../images/cpylogo.png";
import RaYogaLogo from "../../images/RaYogaLogo.gif";
import WildYogiLogo from "../../images/WildYogiLogo.png";
// import PurpleYogaLogo from "../../images/PurpleYogaLogo.png"; // <-- old Logo
// import PurpleYogaLogo from "../../images/PURPLE+YOGA_FINAL+2.png";
// import Yogapod from "../../images/PurpleYogaLogo.png";
//import LiveMusicYoga from "../../images/liveMusicYoga.png";
// import ScheduleBackground from "../../images/cpyredrocks.png";
// import logo from "../../images/logo-MichelleRose.png";

const Schedule = () => {
  return (
    <div className="schedule">
      <section id="scheduleSection">
        <Row>
          <h3>Schedule</h3>
        </Row>
        <div className="scheduleContainer">
          <Row>
            {" "}
            <Col l={5} s={12}>
              {/* <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  src={logo}
                  alt="Michelle Scutti logo"
                />
                <p className="scheduleCardSpan">No public classes available at this time.</p>
            </div> */}

              {/* =========
                COREPOWER
              ============= */}
              {/* <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  src={Corepower}
                  alt="cpy logo"
                />
                

                <p className="scheduleCardSpan">
                  <strong>Hot Power Fusion - Yin Yoga</strong>
                  <br />
                  Friday 4:00pm HPF 
                  <br />
                  Friday 5:30pm Yin Yoga (Restorative)
                  <br />
                  2646 Dupont Drive, Irvine, CA 92612
                </p>

                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.corepoweryoga.com/yoga-studios/ca/orange-county/irvine-jamboree"
                  >
                    Irvine Jamboree Studio Info
                  </a>
                </div>
              </div>  */}

              {/* =========
                PURPLE YOGA
              ============= */}

              {/* <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  style={{ margin: "-20px auto -20px auto"  }}
                  src={PurpleYogaLogo}
                  alt="purple yoga logo"
                />
                <p className="scheduleCardSpan">
                  <strong>Sunday - Huntington Beach </strong>
                  <br />
                  10:00am Red 60 Heated Vinyasa Yoga
                  <br />
                  11:30am Red 60 Heated Vinyasa Yoga
                  <br />
                  1:00pm Green 60 Vinyasa Yoga
                </p>
                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://purpleyoga.org/huntington-beach-schedule/"
                  >
                    Huntington Beach Studio
                  </a>
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://purpleyoga.org/long-beach-schedule/"
                  >
                    Long Beach
                  </a>
                </div> 
            </div> */}

              {/* =========
                RA YOGA
              ============= */}
              <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  style={{ margin: "-20px auto -20px auto" }}
                  src={RaYogaLogo}
                  alt="ra yoga logo"
                />
                <p className="scheduleCardSpan">
                  <strong>Friday</strong>
                  <br />
                  5:30pm Intro to Level 2
                  <br />
                  7:30pm Hot Ra - Candlelit
                </p>
                <p className="scheduleCardSpan">
                  <strong>Saturday</strong>
                  <br />
                  8:30am Hot Ra
                  <br />
                  10:00am Intro to Level 2
                </p>
                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://rayoga.com/locations/Mission-Viejo/"
                  >
                    Mission Viejo Studio
                  </a>
                </div>
              </div>

              {/* =========
                The Wild Yogi
              ============= */}
              <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  style={{ margin: "-20px auto -20px auto" }}
                  src={WildYogiLogo}
                  alt="wild yogi logo"
                />

                <p className="scheduleCardSpan">
                  <strong>Saturday</strong>
                  <br />
                  12:00pm Heated Slow Flow
                  <br />
                </p>
                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.thewildyogistudio.com/"
                  >
                    Aliso Viejo Studio
                  </a>
                </div>
              </div>
            </Col>
            <Col l={7} s={12}>
              <div className="scheduleCard" style={{ marginTop: "30px" }}>
                <iframe
                  title="Michelle's Studios"
                  src="https://www.google.com/maps/d/embed?mid=1xKxLsKdvvu8otm07MsUX7eeszkEZZCI7&z=11"
                  width="100%"
                  height="475"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
