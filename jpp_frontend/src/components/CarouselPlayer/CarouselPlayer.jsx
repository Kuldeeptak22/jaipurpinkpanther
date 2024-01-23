import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import axios from "axios";
import "./CarouselPlayer.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarouselPlayer = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box sx={{ maxWidth: 300, flexGrow: 1 }} className="cardbackground">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {fetchedData ? fetchedData &&
          fetchedData.map((step, index) => (
            <div key={step._id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Box
                    component="img"
                    sx={{
                      maxWidth: 260,
                      maxHeight: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={`http://localhost:6500/uploads/players/${step.avatar}`}
                    alt={step.label}
                  />
                  <div className="bg-danger cardFamily py-3 fw-bold text-white ">
                    <p className="fs-4">{`${
                      fetchedData[activeStep].firstName
                    } ${
                      fetchedData[activeStep].lastName
                        ? fetchedData[activeStep].lastName
                        : ""
                    } `}</p>
                    <p
                      className="fs-6"
                      style={{
                        color: "#4dbee3",
                        textShadow: "2px 2px 4px black",
                      }}
                    >
                      {step.role}
                    </p>
                  </div>
                </>
              ) : null}
            </div>
          )): <Box sx={{ display: "flex",justifyContent:"center" }}>
           <CircularProgress />
          </Box>}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default CarouselPlayer;
