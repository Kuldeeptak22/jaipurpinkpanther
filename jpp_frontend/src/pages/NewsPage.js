import React, { useEffect, useState } from "react";
import CommonBanner from "../components/Banner/CommonBanner";
import NewsCard from "../components/NewsCard/NewsCard";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Title = "NEWS";

const NewsPage = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = () => {
    try {
      axios.get("http://localhost:6500/newses/get_all_News").then((res) => {
        setFetchedData(res.data.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container fluid className="p-0">
      <CommonBanner Title={Title} />
      <Row className="p-3 g-0 d-flex justify-content-center">
        {fetchedData ? (
          fetchedData &&
          fetchedData.map((elem) => (
            <Col md={2} lg={3} className="commonFamily newsCard d-flex justify-content-center">
              <NewsCard data={elem} key={elem._id} />
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

export default NewsPage;
