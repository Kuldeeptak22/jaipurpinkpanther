import React, { useEffect, useState } from "react";
import AOS from "aos";
import CommonBanner from "../components/Banner/CommonBanner";
import PlayerType from "../components/Player/PlayerType";
import PlayerCard from "../components/Card/PlayerCard";
import { Col, Container, Row } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Title = "PLAYERS";
const Type = {
  raider: "RAIDERS",
  defenderes: "DEFENDERS",
  allRounders: "ALL ROUNDERS",
};
const PlayersPage = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = () => {
    try {
      axios.get("http://localhost:6500/players/get_Players").then((res) => {
        setFetchedData(res.data.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();
  const playerDetails = (id) => {
    navigate(`/players/playerDetails/${id}`);
  };

  return (
    <Container fluid className="p-0 playerPageBackground">
      <Row className="g-0 ">
        <Col sm={12}>
          <CommonBanner Title={Title} />
        </Col>
      </Row>
      <Row className="g-0 justify-content-between">
        <Col sm={5} data-aos="fade-right">
          <PlayerType Type={Type.raider} />
        </Col>
      </Row>
      <Row className="my-5 mx-auto">
        {fetchedData ? (
          fetchedData &&
          fetchedData
            .filter((data) => {
              const { role } = data;
              return (
                role === "Right Raider" ||
                role === "Raider" ||
                role === "Left Raider"
              );
            })
            .map((filteredData, index) => (
              <Col
                xxl={3}
                xl={4}
                lg={4}
                sm={6}
                className="my-4 px-4"
                key={filteredData.jerseyNo}
                data-aos="zoom-in"
                onClick={() => playerDetails(filteredData._id)}
              >
                <PlayerCard
                  firstName={filteredData.firstName}
                  lastname={filteredData.lastName}
                  avatar={filteredData.avatar}
                  role={filteredData.role}
                  jerseyNo={filteredData.jerseyNo}
                />
              </Col>
            ))
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
      </Row>
      <Row className="g-0 justify-content-between">
        <Col sm={5} data-aos="fade-right">
          <PlayerType Type={Type.defenderes} />
        </Col>
      </Row>
      <Row className="my-5 mx-auto">
        {fetchedData ? (
          fetchedData &&
          fetchedData
            .filter((data) => {
              const { role } = data;
              return (
                role === "Right Cover" ||
                role === "Left Cover" ||
                role === "Right Corner" ||
                role === "Left Corner"
              );
            })
            .map((filteredData, index) => (
              <Col
                xxl={3}
                xl={4}
                lg={4}
                sm={6}
                className="px-4"
                key={filteredData.jerseyNo}
                data-aos="zoom-in"
                onClick={() => playerDetails(filteredData._id)}
              >
                <PlayerCard
                  firstName={filteredData.firstName}
                  lastname={filteredData.lastName}
                  avatar={filteredData.avatar}
                  role={filteredData.role}
                  jerseyNo={filteredData.jerseyNo}
                />
              </Col>
            ))
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
      </Row>
    </Container>
  );
};

export default PlayersPage;
