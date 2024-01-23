import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../../essets/images/Logojpp.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Love from "../../essets/images/footer/companies/madeWithLove.png";
import Agno from "../../essets/images/footer/companies/agnlogo1.png";
import Ask from "../../essets/images/footer/companies/asklogo1.png";
import Avi from "../../essets/images/footer/companies/avlogo1.png";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Row className="g-0 parentFooter mt-2">
      <Col sm={12} className="Footer d-flex justify-content-center flex-column">
        <div className="FooterLogo ">
          <img src={Logo} alt="Logo" style={{ height: "20vh" }} />
        </div>
        <div className="socialNotice">
          <p className="text-white">PINK PANTHERS ON SOCIAL CHANNELS</p>
        </div>
        <div className="d-sm-flex gap-4 justify-content-center">
          <a
            className="text-white"
            href="https://www.instagram.com/jaipur_pinkpanthers/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="fs-1" />
          </a>
          <a
            className="text-white"
            href="https://www.facebook.com/JaipurPinkPanthers"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="fs-1" />
          </a>
          <a
            className="text-white"
            href="https://www.youtube.com/c/JaipurPinkPanthers"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon className="fs-1" />
          </a>
          <a
            className="text-white"
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FJaipurPanthers"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="fs-1" />
          </a>
        </div>
        <div className="socialNotice my-5">
          <p className="text-white">© JAIPUR PINK PANTHERS</p>
        </div>
      </Col>
      <Col sm={12} className="Quickly d-flex px-5 text-white flex-column">
        <div className="fs-3 w-100">
          <p className="quickLinks text-md-start">QUICK LINKS</p>
          <hr className="text-white" />
        </div>

        <div className="MenuLists d-md-flex justify-content-md-start text-md-start">
          <ul style={{ listStyle: "none" }} className="p-5 d-flex flex-column justify-content-center align-items-center">
            <NavLink className="nav-link" to="termsAndCondition">
              Terms & Conditions
            </NavLink>
            <NavLink className="nav-link" to="privacyPolicy">
              privacy policy
            </NavLink>
          </ul>
          <ul style={{ listStyle: "none" }} className="p-5 d-flex flex-column justify-content-center align-items-center">
            <NavLink to="/players" className="nav-link">
              Squad
            </NavLink>
            <NavLink to="/standings" className="nav-link">
              Standings
            </NavLink>
            <NavLink to="/fixtures" className="nav-link">
              Fixtures
            </NavLink>
            <NavLink to="/news" className="nav-link">
              News
            </NavLink>
          </ul>
        </div>
      </Col>
      <Col sm={12} className="d-md-flex justify-content-center my-3">
        <img src={Love} alt="Love" className="p-3 img-fluid CompLogo" />
        <a
          className="text-white"
          href="https://agnostech.in/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Agno} alt="Agno" className="p-3 img-fluid CompLogo" />
        </a>
        <a
          className="text-white"
          href="https://askmediacorp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Ask} alt="Ask" className="p-3 img-fluid CompLogo" />
        </a>
        <img src={Avi} alt="Avi" className="p-3 img-fluid CompLogo" />
      </Col>
    </Row>
  );
};

export default Footer;
