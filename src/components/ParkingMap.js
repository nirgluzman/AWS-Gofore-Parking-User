import { Stack, Box, Tooltip } from "@mui/material";

export function ParkingMap() {
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
        <Tooltip title="free" leaveDelay={200}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              typography: "h4",
              fontWeight: "bold",
              backgroundColor: "success.light",
              color: "white",
              height: "10vh",
              width: "3vw",
            }}
          >
            1
          </Box>
        </Tooltip>
        <Tooltip title="occupied" leaveDelay={200}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              typography: "h4",
              fontWeight: "bold",
              backgroundColor: "error.main",
              color: "white",
              height: "10vh",
              width: "3vw",
            }}
          >
            2
          </Box>
        </Tooltip>
      </Stack>
    </>
  );
}
