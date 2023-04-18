import { Stack, Box, Tooltip } from "@mui/material";

import { Park } from "../context/ParkContext";

export function ParkingMap() {
  const { parkData } = Park();

  return (
    <>
      <Box
        sx={{
          typography: "h4",
          textAlign: "center",
          fontWeight: "regular",
          m: 5,
        }}
      >
        Please select the parking space:
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {parkData.map((row) => (
          <Tooltip title={row.freeSpot ? "free" : "occupied"} leaveDelay={200}>
            <Box
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
