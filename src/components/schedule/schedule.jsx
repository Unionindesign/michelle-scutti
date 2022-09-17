import React from "react";
import "./schedule.css";

//React Materiliaze
import { Row, Col } from "react-materialize";

//images
import Corepower from "../../images/cpylogo.png";
import RaYogaLogo from "../../images/RaYogaLogo.gif";
import PurpleYogaLogo from "../../images/PurpleYogaLogo.png";
// import Yogapod from "../../images/PurpleYogaLogo.png";
//import LiveMusicYoga from "../../images/liveMusicYoga.png";
// import ScheduleBackground from "../../images/cpyredrocks.png";

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
                              
              {/* =========
                COREPOWER
              ============= */} 
              <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  src={Corepower}
                  alt="cpy logo"
                />
                

                <p className="scheduleCardSpan">
                  <strong>Hot Power Fusion - C1 & C2 Power Vinyasa</strong>
                  <br />
                  Thursday 5:30pm HPF || 7:00pm C1
                  <br />
                  Saturday 7:00am HPF || 10:00am HPF
                  <br />
                  Sunday 11:00am C2 || 1:00pm C2 Heated Power Vinyasa
                  <br />
                  7777 Edinger Ave, Suite D-230, Huntington Beach, CA 92647
                </p>

                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.corepoweryoga.com/yoga-studios/CA/Huntington%20Beach/huntington-beach"
                  >
                    Huntington Beach Studio Info
                  </a>
                </div>
              </div> 

              {/* =========
                RA YOGA
              ============= */}
              <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  style={{ margin: "-20px auto -20px auto"  }}
                  src={RaYogaLogo}
                  alt="ra yoga logo"
                />
                <p className="scheduleCardSpan">
                  <strong>Hot Ra - Hot Yoga</strong>
                  <br />
                  Wednesday 6:00am
                  <br />
                  Thursday 6:30am
                  <br />
                  Saturday 4:00pm
                  <br />
                </p>
                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://rayoga.com/long-beach-studio/"
                  >
                    Ra Yoga Long Beach Studio Info
                  </a>
                </div> 
            </div>


             {/* =========
                PURPLE YOGA
              ============= */}
              <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  style={{ margin: "-20px auto -20px auto"  }}
                  src={PurpleYogaLogo}
                  alt="purple yoga logo"
                />
                <p className="scheduleCardSpan">
                  <strong>Blue 60 (Vinyasa) - Red 60 (Heated Vinyasa)</strong>
                  <br />
                  Monday 6:00am Red 60 - Fullerton Studio
                  <br />
                  Friday 9:15am Blue 60 - Long Beach Studio
                  <br />
                </p>
                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.purpleyoga.org/fullerton"
                  >
                    Fullterton Studio
                  </a>
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.purpleyoga.org/long-beach"
                  >
                    Long Beach Studio
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
                  height="700"
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
