import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Box, Tooltip, Alert, AlertTitle } from "@mui/material";

import { Park } from "../context/ParkContext";

import axios from "axios";

export function ParkingMap({ vrn }) {
  const [parkConfirmMessage, setParkConfirmMessage] = useState("");
  const [spotError, setSpotError] = useState("");
  const { parkData } = Park();

  const navigate = useNavigate();

  const handleSpotSelection = async (parkingSpot) => {
    setSpotError("");
    setParkConfirmMessage("");

    try {
      const result = await axios.put(process.env.REACT_APP_API_URL + "add", {
        parkingSpot,
        vrn,
      });
      if (result.data.length === 0) {
        throw new Error("An error occurred, please try again!");
      }
      setParkConfirmMessage(result.data.message);
    } catch (err) {
      setSpotError(err.response.data.replace(/\n/g, ""));
      console.log(err.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          typography: "h6",
          textAlign: "center",
          fontWeight: "bold",
          m: 5,
        }}
      >
        Please select the parking space:
      </Box>
      {parkConfirmMessage && (
        <Alert
          severity="success"
          sx={{ mb: 2 }}
          onClose={() => {
            setParkConfirmMessage("");
            navigate("/");
          }}
        >
          <AlertTitle>Success</AlertTitle>
          {parkConfirmMessage}
        </Alert>
      )}
      {spotError && (
        <Alert
          severity="error"
          sx={{ mb: 2 }}
          onClose={() => {
            setSpotError("");
          }}
        >
          <AlertTitle>Error</AlertTitle>
          {spotError}
        </Alert>
      )}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {parkData.map((row) => (
          <Tooltip
            key={row.parkingSpot}
            title={row.freeSpot ? "free" : "occupied"}
            leaveDelay={200}
          >
            <Box
              onClick={() => handleSpotSelection(row.parkingSpot)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                typography: "h4",
                fontWeight: "bold",
                backgroundColor: row.freeSpot ? "success.light" : "error.main",
                color: "white",
                height: "10vh",
                width: "3vw",
              }}
            >
              {row.parkingSpot}
            </Box>
          </Tooltip>
        ))}
      </Stack>
    </>
  );
}
