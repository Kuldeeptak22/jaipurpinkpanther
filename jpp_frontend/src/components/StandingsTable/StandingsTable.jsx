import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import "./StandingTable.scss";

const StandingsTable = () => {
  const [fetchedStanding, setFetchedStanding] = useState([]);
  const standingData = () => {
    axios
      .get("http://localhost:6500/standings/get_standings")
      .then((res) => setFetchedStanding(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    standingData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="TableHeadColor">
          <TableRow>
            <TableCell align="center" className="standingHeading">
              Rank
            </TableCell>
            <TableCell align="center" className="standingHeading">
              Team
            </TableCell>
            <TableCell align="center" className="standingHeading">
              {}
            </TableCell>
            <TableCell align="center" className="standingHeading">
              Matches Played
            </TableCell>
            <TableCell align="center" className="standingHeading">
              Won
            </TableCell>
            <TableCell align="center" className="standingHeading">
              Lost
            </TableCell>
            <TableCell align="center" className="standingHeading">
              Tie
            </TableCell>
            <TableCell align="center" className="standingHeading">
              Score Difference
            </TableCell>
            <TableCell align="center" className="standingHeading">
              Points
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="StandingBodyColor">
          {fetchedStanding ? (
            fetchedStanding &&
            fetchedStanding.map((row) => (
              <TableRow
                key={row.teamRank}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  className="StandingBodyHeading"
                >
                  {row.teamRank}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={`http://localhost:6500/uploads/standings/${row.teamLogo}`}
                    alt={row.teamName}
                    height={"80"}
                  />
                </TableCell>
                <TableCell align="center" className="StandingBodyHeading">
                  {row.teamName}
                </TableCell>
                <TableCell align="center" className="StandingBodyHeading">
                  {row.matchesPlayed}
                </TableCell>
                <TableCell align="center" className="StandingBodyHeading">
                  {row.matchesWon}
                </TableCell>
                <TableCell align="center" className="StandingBodyHeading">
                  {row.matchesLoss}
                </TableCell>
                <TableCell align="center" className="StandingBodyHeading">
                  {row.matchesTie}
                </TableCell>
                <TableCell align="center" className="StandingBodyHeading">
                  {row.scoreDifference}
                </TableCell>
                <TableCell align="center" className="StandingBodyHeading">
                  {row.points}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StandingsTable;
