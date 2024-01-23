import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlayerData.scss";
import { Box, CircularProgress } from "@mui/material";
import { Col, Row } from "react-bootstrap";

const PlayerData = () => {
  const playerId = useParams();
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = () => {
    try {
      axios
        .get(`http://localhost:6500/players/get_Player/${playerId.playerId}`)
        .then((res) => {
          setFetchedData(res.data.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(fetchedData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return fetchedData ? (
    <>
      <Row className="g-0 playerData d-flex justify-content-center flex-column">
        <Col className="fw-bold text-white playerName">{`${fetchedData?.firstName?.toUpperCase()} ${
          fetchedData?.lastName ? fetchedData?.lastName?.toUpperCase() : ""
        }`}</Col>
        <Col className="">
          <img
            src={`http://localhost:6500/uploads/players/${fetchedData?.avatar}`}
            alt={fetchedData?.firstName}
            className="playerImage"
          />
        </Col>
        <Col className="playerNumber">{fetchedData?.jerseyNo}</Col>
        <Col className="playerRole d-flex justify-content-center">
          <div className="fw-bold fs-3 text-white">{fetchedData?.role}</div>
          <div></div>
        </Col>
      </Row>
      <Row className="g-0 py-5 px-3 text-white standingSeason9Color playerInfo mt-5">
        <Col sm={6} className="py-3 fw-bold fs-3">
        <div>{fetchedData?.dob}</div>
        <div>{fetchedData?.nationality}</div>
        </Col>
        <Col sm={6} className="px-3">{fetchedData?.about}</Col>
      </Row>
    </>
  ) : (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default PlayerData;
