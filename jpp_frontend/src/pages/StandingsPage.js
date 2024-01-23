import React, { useEffect } from "react";
import AOS from "aos";
import CommonBanner from "../components/Banner/CommonBanner";
import { Col, Container, Row } from "react-bootstrap";
import StandingsTable from "../components/StandingsTable/StandingsTable";
import "aos/dist/aos.css";
import SeasonBanner from "../components/SeasonsBanner/SeasonBanner";

const Title = "STANDINGS";
const StandingsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container fluid className="p-0">
      <CommonBanner Title={Title} />
      <SeasonBanner />
      <Row className="p-0 g-0">
        <StandingsTable />
      </Row>
    </Container>
  );
};

export default StandingsPage;
