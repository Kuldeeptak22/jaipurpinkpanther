import React from "react";
import "./MainBanner.scss";
import { Col, Container, Row } from "react-bootstrap";

const MainBanner = () => {
  return (
    <Container fluid >
      <Row className="mainBannerRow">
        <Col className="mainBanner">
          <p className="fs-2 position-absolute bottom-0 end-0 px-4 ROARFORPANTHERS">
            #ROARFORPANTHERS
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MainBanner;
