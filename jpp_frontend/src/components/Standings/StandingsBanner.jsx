import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const StandingsBanner = () => {
  return (
    <Container fluid>
      <Row className="palyerBannerRow ">
        <Col className="playerBanner">
          <h1>STANDINGS</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default StandingsBanner;
