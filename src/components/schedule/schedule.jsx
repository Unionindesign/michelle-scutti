import React, { Component } from "react";
import "./schedule.css";

//React Materiliaze
import { Row, Col } from "react-materialize";

//images
import Corepower from "../../images/cpylogo.png";
import LiveMusicYoga from "../../images/liveMusicYoga.png";
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
              <Col l={5} s={12}>
                <div className="scheduleCard">
                  <img
                    className="scheduleCardLogoImg"
                    src={Corepower}
                    alt="cpy logo"
                  />
                  <h6>Hot Power Fusion</h6>
                  <p className="scheduleCardSpan">
                    Mondays 7pm @ Cherry Hills
                    <br />
                    5004 E Hampden Ave, Denver, CO 80222
                  </p>
                  <p className="scheduleCardSpan">
                    Wednesdays 8pm @ Highlands
                    <br />
                    3390 W 32nd Ave, Denver, CO 80211
                  </p>

                  <img
                    className="scheduleCardImg"
                    src={LiveMusicYoga}
                    alt="live music class CPY littleton"
                  />
                  <div className="cardFooter">
                    <hr />
                    <a
                      className="cardFooterLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.corepoweryoga.com/yoga-studios/colorado/denver/cherry-hills"
                    >
                      Cherry Hills Studio
                    </a>
                    <a
                      className="cardFooterLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.corepoweryoga.com/yoga-studios/colorado/denver/highlands"
                    >
                      Highlands Studio
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
                    height="450"
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
