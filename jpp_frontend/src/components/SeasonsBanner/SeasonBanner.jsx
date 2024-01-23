import React from "react";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    title: "Season 9",
  },
  {
    title: "Season 8",
  },
  {
    title: "Season 7",
  },
  {
    title: "Season 6",
  },
  {
    title: "Season 5",
  },
  {
    title: "Season 4",
  },
];

const SeasonBanner = () => {
  return (
    <Row className="p-0 g-0 my-5 d-flex justify-content-center">
      {data &&
        data.map((elem) => (
          <Col
            lg={1}
            key={elem.title}
            className={`mx-1 fw-bold text-white standingSeason my-1 p-3 ${
              elem.title === "Season 9"
                ? "standingSeason9Color"
                : "standingSeasonColor"
            }`}
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            {elem.title}
          </Col>
        ))}
    </Row>
  );
};

export default SeasonBanner;
