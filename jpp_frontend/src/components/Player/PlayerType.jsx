import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PlayerType.scss";

const PlayerType = (props) => {
  return (
    <div className="my-5 p-3 playerType">
      <h2 className="fw-bold">{props.Type}</h2>
    </div>
  );
};

export default PlayerType;
