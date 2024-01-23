import React, { useEffect } from "react";
import AOS from "aos";
import { Col, Container, Row } from "react-bootstrap";
import MainBanner from "../components/Home/MainBanner";
import CarouselPlayer from "../components/CarouselPlayer/CarouselPlayer";
import Match from "../essets/images/home banner/match.jpeg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "aos/dist/aos.css";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid>
      <Row className="playerHome">
        <Col sm={12} className="p-0">
          <MainBanner />
        </Col>
        <Col
          sm={12}
          className="homePageParagraph d-flex align-items-center justify-content-center"
        >
          <p className="mx-3 p-sm-5 my-5 commonFamily text-white fw-bold">
            Jaipur Pink Panther is currently one of the top performing teams in
            the Pro Kabaddi League. With a mix of unstoppable energy, honed-out
            skills and steely nerves, here's a force that consistently looks
            forward to perform better, challenge its opponents and make a
            difference.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center py-3 px-4 playerHome">
        <Col className="m-2 playerHomename">
          <p
            className="commonFamily fw-bolder"
            style={{ textShadow: "2px 4px 4px pink" }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Players
          </p>
        </Col>
        <Col
          sm={12}
          md={6}
          className="mt-2 py-4 d-flex justify-content-center "
        >
          <CarouselPlayer />
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center align-items-center py-3"
        style={{ background: "#e34573" }}
      >
        <Col sm={12} className="p-3">
          <img
            src={Match}
            alt="Match"
            style={{ boxShadow: "2px 4px 6px white" }}
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center py-4 commonFamily fw-bold blueColor">
        <Col sm={6}>
          <p className="fs-3">Subscribe To Our News Letter</p>
        </Col>
        <Col sm={6} className="flex-start">
          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {};
              if (values.email) {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const notify = () => toast("Thankyou for Subscribe!");
                notify();
                setSubmitting(false);
                values.email = "";
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    display: "flex",
                  }}
                >
                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    label="Email address"
                    id="fullWidth"
                    placeholder="Email address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    size="large"
                    className="mx-1"
                  >
                    Subscribe
                  </Button>
                  <ToastContainer />
                </Box>
                {errors.email && touched.email && errors.email}
              </form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
