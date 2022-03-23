import React from "react";
import "./schedule.css";

//React Materiliaze
import { Row, Col } from "react-materialize";

//images
import Corepower from "../../images/cpylogo.png";
// import Yogapod from "../../images/yogapod-logo.jpg";
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
                COREPOWER - HIDDEN
              ============= */} 
              <div className="scheduleCard">
                <img
                  className="scheduleCardLogoImg"
                  src={Corepower}
                  alt="cpy logo"
                />
                

                <p className="scheduleCardSpan">
                  <strong>Hot Power Fusion & Core Restore</strong>
                  <br />
                  Tuesday 5:30pm HPF || 9:00pm HPF: Candlelight class
                  <br />
                  Thursday 5:30pm HPF || 8:30pm Core Restore (Yin Yoga)
                  <br />
                  Friday 6:30am HPF
                  <br />
                  Saturday 7:00am HPF || 11:30am HPF
                  <br />
                  <br />
                  7777 Edinger Ave, Suite D-230, Huntington Beach, CA 92647
                </p>

                {/* <p className="scheduleCardSpan">
                  <strong>Hot Power Fusion</strong>
                  <br />
                  Friday 6:30am
                  <br />
                  7777 Edinger Ave, Suite D-230, Huntington Beach, CA 92647
                </p> */}

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
                  {/* <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.corepoweryoga.com/yoga-studios/colorado/littleton/littleton"
                  >
                    Littleton Studio
                  </a> */}
                </div>
              </div> 

              {/* =========
                YOGAPOD
              ============= */}
              <div className="scheduleCard">
                <p className="scheduleCardSpan">
                  <strong>Private Classes</strong>
                  <br />
                  Available in Orange County, CA
                  <br /> <br />
                </p>

                {/* <img
                  className="scheduleCardLogoImg"
                  style={{ margin: "-20px auto -20px auto" }}
                  src={Yogapod}
                  alt="cpy logo"
                />
               <h4 className="scheduleTitle">Class Schedule</h4> 

                <p className="scheduleCardSpan">
                  <strong>Hot Yoga</strong>
                  <br />
                  Friday 6:00pm
                  <br /> <br />
                  <strong>Pod Flow 2 Heated Vinyasa</strong>
                  <br />
                  Saturday 5:15pm
                  <br /> <br />
                  <strong>Yin & Nidra</strong>
                  <br />
                  Saturday 6:30pm
                  <br /> <br />
                  Denver West Studio
                  <br />
                  14500 W. Colfax Drive #131A Denver, CO 80401
                </p>

                <div className="cardFooter">
                  <hr />
                  <a
                    className="cardFooterLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.yogapod.com/denverwest/"
                  >
                    Studio Info
                  </a>
                </div>  */}
            </div>
            </Col>
            <Col l={7} s={12}>
              <div className="scheduleCard" style={{ marginTop: "60px" }}>
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
