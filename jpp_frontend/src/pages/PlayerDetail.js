import React from "react";
import PlayerData from "../components/Player/PlayerData";
import { Container} from "react-bootstrap";

const PlayerDetail = () => {
  return (
    <Container fluid className="p-0 blueColorBackground">
      <PlayerData />
    </Container>
  );
};

export default PlayerDetail;
