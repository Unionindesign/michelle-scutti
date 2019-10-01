import React, { Component } from "react";
import "./headerNav.css";

//React Materiliaze
import {
  Icon,
  Button,
  SideNav,
  SideNavItem,
  Row,
  Col
} from "react-materialize";

//Images
import logo from "../../images/logo-MichelleRose.png";
// import redRocks from "../../images/cpyredrocks.png";

class HeaderNav extends Component {
  render() {
    return (
      <div className="headerNav">
        <Row>
          <Col s={12}>
            <img className="headerLogo" src={logo} alt="Wild Rose Yoga Logo" />
          </Col>
        </Row>

        <Row className="subNav">
          <Col s={12}>
            <ul className="subNavBar">
              <Col>
                <li className="subNavLink">
                  <a href="#bioSection">Bio</a>
                </li>
              </Col>
              <Col>
                <li className="subNavLink">
                  <a href="#scheduleSection">Schedule</a>
                </li>
              </Col>
              <Col>
                <li className="subNavLink">
                  <a href="#servicesSection">Services</a>
                </li>
              </Col>
              <Col>
                <li className="subNavLink">
                  <a href="#testimonialsSection">Testimonials</a>
                </li>
              </Col>
              <Col>
                <li className="subNavLink">
                  <a href="#gallery">Gallery</a>
                </li>
              </Col>

              <Col>
                <li className="subNavLink">
                  <Icon tiny className="iconVert">
                    mail
                  </Icon>{" "}
                  michellescutti@gmail.com
                </li>
              </Col>
              <Col>
                <li className="subNavLink">
                  <Icon tiny className="iconVert">
                    call
                  </Icon>{" "}
                  720-291-1930
                </li>
              </Col>
              <Col>
                <li className="subNavContact">
                  <SideNav
                    trigger={
                      <Button className="menuButton">
                        <Icon>menu</Icon>
                      </Button>
                    }
                    options={{ closeOnClick: true }}
                  >
                    <SideNavItem
                      userView
                      user={{
                        background:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0WP5E9fX_D1aMetMejJeJCyFeIbV1cr6O9gfN7AHMFnT_yanwQ",
                        // image: "../../images/cpyredrocks.png",
                        name: "Michelle Scutti",
                        email: "michellescutti@gmail.com",
                        phone: "720-291-1930"
                      }}
                    />

                    <SideNavItem href="#bioSection" icon="account_circle">
                      Bio
                    </SideNavItem>
                    <SideNavItem href="#scheduleSection" icon="event">
                      Yoga Class Schedule
                    </SideNavItem>

                    <SideNavItem href="#servicesSection" icon="description">
                      Services & Privates
                    </SideNavItem>
                    <SideNavItem href="#testimonialsSection" icon="sms">
                      Testimonials
                    </SideNavItem>
                    <SideNavItem href="#gallery" icon="photo_library">
                      Gallery
                    </SideNavItem>
                  </SideNav>
                </li>
              </Col>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HeaderNav;
