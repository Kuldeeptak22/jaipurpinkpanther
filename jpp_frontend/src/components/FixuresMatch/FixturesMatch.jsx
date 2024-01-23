import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FixturesMatch.scss";
import axios from "axios";

const FixturesMatch = () => {
  const [fetchedFixtures, setFetchedFixtures] = useState([]);
  const fixtureData = () => {
    axios
      .get("http://localhost:6500/matches/get_Matches")
      .then((res) => setFetchedFixtures(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fixtureData();
  }, []);
  return (
    <Container fluid>
      <Row className="my-5 justify-content-center">
        {fetchedFixtures ? (
          fetchedFixtures &&
          fetchedFixtures.map((elem) => (
            <>
              <Col
                sm={12}
                className="d-flex flex-column justify-content-center align-items-center fixturesHeading"
              >
                <p className="mt-4 fw-bold fs-5">
                  {`Match ${elem.matchNo} : ${elem.timeAndDate}`}
                </p>
                <p className="fw-bold fs-5">({elem.address})</p>
              </Col>
              <Col sm={12}>
                <Accordion
                  sx={{ background: "rgb(73, 69, 69)", color: "white" }}
                >
                  <AccordionSummary
                    className="accordd"
                    expandIcon={<ExpandMoreIcon className="text-white" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="d-sm-flex justify-content-center align-items-center text-center m-auto">
                      <img
                        src={`http://localhost:6500/uploads/matches/${elem.teamOneLogo}`}
                        alt={elem.teamOneName}
                        className="img-fluid"
                      />
                      <p className="fontFamilyMain fw-bold ">
                        {elem.teamOneName.toUpperCase()}
                      </p>
                      <p className="fontFamilyMain fw-bold px-5 fs-3">
                        {`${elem.teamOneTotalPoints} - ${elem.teamTwoTotalPoints}`}
                      </p>
                      <p className="fontFamilyMain fw-bold ">
                        {elem.teamTwoName.toUpperCase()}
                      </p>

                      <img
                        src={`http://localhost:6500/uploads/matches/${elem.teamTwoLogo}`}
                        alt={elem.teamTwoName}
                        className="img-fluid"
                      />
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="accordingDetails d-sm-flex justify-content-center fontFamilyMain fw-bold">
                    <Container>
                      <Row>
                        <Col
                          sm={12}
                          className="d-flex my-3 justify-content-evenly align-items-center px-5 detailsacco bg-white"
                        >
                          <div className="fontFamilyColor px-4 py-3">
                            {elem.teamOneRaidPoints}
                          </div>
                          <div className="px-2 text-black">Raid Points</div>
                          <div className="fontFamilyColor px-4 py-3">
                            {elem.teamTwoRaidPoints}
                          </div>
                        </Col>
                        <Col
                          sm={12}
                          className="d-flex  my-3 justify-content-evenly align-items-center px-5 detailsacco bg-white"
                        >
                          <div className="fontFamilyColor px-4 py-3 ">
                            {elem.teamOneTacklePoints}
                          </div>
                          <div className="px-2 text-black">Tackle Points</div>
                          <div className="fontFamilyColor px-4 py-3">
                            {elem.teamTwoTacklePoints}
                          </div>
                        </Col>
                        <Col
                          sm={12}
                          className="d-flex  my-3  justify-content-evenly align-items-center px-5 detailsacco bg-white"
                        >
                          <div className="fontFamilyColor px-4 py-3">
                            {elem.teamOneAllOutPoints}
                          </div>
                          <div className="px-2 text-black">All Out Points</div>
                          <div className="fontFamilyColor px-4 py-3">
                            {elem.teamTwoAllOutPoints}
                          </div>
                        </Col>
                        <Col
                          sm={12}
                          className="d-flex  my-3 justify-content-evenly align-items-center px-5 detailsacco bg-white"
                        >
                          <div className="fontFamilyColor px-4 py-3">
                            {elem.teamOneExtraPoints}
                          </div>
                          <div className="px-2 text-black">Extra Points</div>
                          <div className="fontFamilyColor px-4 py-3">
                            {elem.teamTwoExtraPoints}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </AccordionDetails>
                </Accordion>
              </Col>
            </>
          ))
        ) : (
          <Box sx={{ display: "flex",justifyContent:"center" }}>
           <CircularProgress />
          </Box>
        )}
      </Row>
    </Container>
  );
};

export default FixturesMatch;
