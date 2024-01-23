import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TermsAndConditionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid>
      <Row className="py-5">
        <Col className="mt-5 py-5">
          <p className="fs-2 fw-bold commonFamily pinkText">
            TERMS AND CONDITIONS
          </p>
          <p className="px-3 commonFamily">
            This Privacy Policy (“Privacy Policy”) sets forth Jaipur Pink
            Panthers Pvt Ltd affirmation to valuing your trust and acknowledges
            your need for appropriate safeguards and management of any Personal
            Information (as defined below) that you share with Jaipur Pink
            Panthers. The Privacy Policy applies to the services offered by
            Jaipur Pink Panthers under the domain
            <a
              className="px-2 text-break"
              href="https://www.jaipurpinkpanthers.com"
              target="_blank"
              rel="noreferrer"
            >
              www.jaipurpinkpanthers.com
            </a>
            and its related sub-domains, websites, services, applications, tools
            or any successor site (collectively known as the ‘Platform’). This
            Privacy Policy applies to the Platform and all products and services
            offered by Jaipur Pink Panthers on this Platform.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsAndConditionPage;
