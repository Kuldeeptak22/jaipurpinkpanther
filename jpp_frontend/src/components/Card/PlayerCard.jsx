import React from "react";
import { Col, Row } from "react-bootstrap";
import "./PlayerCard.scss";

const PlayerCard = (props) => {
  return (
    <Row>
      <Col lg={12}>
        <div
          className="playerCardCover p-3"
        >
          <div className="playerCard">
            <img
              src={`http://localhost:6500/uploads/players/${props.avatar}`}
              alt={props.firstName}
              className="img-fluid px-2"
              style={{ height: "300px" }}
            />
          </div>
          <div className="playerNameColor p-3 d-lg-flex justify-content-center align-items-center">
            <div className="p-2">
              <p className="fw-bold text-white  px-2">
                {props.firstName.toUpperCase()}
              </p>
              <p className="text-white playerRole">
                {`${props.role}`.toUpperCase()}
              </p>
            </div>
            <div>
              <p className="fs-3 jerseyNo px-4 fw-bold">{props.jerseyNo}</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PlayerCard;
