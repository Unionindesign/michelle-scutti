import React, { Component } from "react";
import "./schedule.css";

//React Materiliaze
import { Row, Col } from "react-materialize";

//images
import Corepower from "../../images/cpylogo.png";
import Yogapod from "../../images/yogapod-logo.jpg";
//import LiveMusicYoga from "../../images/liveMusicYoga.png";
// import ScheduleBackground from "../../images/cpyredrocks.png";

class Schedule extends Component {
  render() {
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
                  {/* <h4 className="scheduleTitle">Class Schedule</h4> */}

                  <p className="scheduleCardSpan">
                    <strong>Hot Power Fusion</strong>
                    <br />
                    Wednesdays 8pm @ Belmar
                    <br />
                    7349 W. Alaska Drive Lakewood, CO 80226
                  </p>

                  <p className="scheduleCardSpan">
                    <strong>C2 Power Vinyasa</strong>
                    <br />
                    Saturdays 12 noon @ Littleton
                    <br />
                    2825 W. Belleview Ave, Littleton, CO 80123
                  </p>

                  <div className="cardFooter">
                    <hr />
                    <a
                      className="cardFooterLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.corepoweryoga.com/yoga-studios/colorado/lakewood/belmar"
                    >
                      Belmar Studio
                    </a>
                    <a
                      className="cardFooterLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.corepoweryoga.com/yoga-studios/colorado/littleton/littleton"
                    >
                      Littleton Studio
                    </a>
                  </div>
                </div>
                {/* =========
                  YOGAPOD
                ============= */}
                <div className="scheduleCard">
                  <img
                    className="scheduleCardLogoImg"
                    style={{ margin: "-20px auto -20px auto" }}
                    src={Yogapod}
                    alt="cpy logo"
                  />
                  {/* <h4 className="scheduleTitle">Class Schedule</h4> */}

                  <p className="scheduleCardSpan">
                    <strong>Hot Yoga</strong>
                    <br />
                    Friday 6pm @ Denver West
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
                      Denver West Studio
                    </a>
                  </div>
                </div>
              </Col>
              <Col l={7} s={12}>
                <div className="scheduleCard">
                  <iframe
                    title="Michelle's Studios"
                    src="https://www.google.com/maps/d/embed?mid=1xKxLsKdvvu8otm07MsUX7eeszkEZZCI7"
                    width="100%"
                    height="590"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

export default Schedule;
