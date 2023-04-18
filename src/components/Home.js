import { Box, Stack, Avatar, Typography, Paper, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { Park } from "../context/ParkContext";

import parkSign from "../images/park-sign.png";

export function Home() {
  const navigate = useNavigate();
  const { numFreeSpots } = Park();

  return (
    <Box sx={{ p: 5, width: "100%" }}>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={2}
      >
        <Avatar
          src={parkSign}
          variant="square"
          sx={{ width: 200, height: 200 }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            width: 200,
            typography: "h3",
            fontWeight: "bold",
            color: numFreeSpots > 0 ? "success.light" : "error.main",
          }}
        >
          {numFreeSpots}
        </Box>
        <Paper
          elevation={2}
          sx={{
            width: 400,
            height: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textDecoration: "underline" }}
            gutterBottom
          >
            Hourly Parking Price List
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Up to 10 minutes free
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            First 3 hours: 50¢
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Next hours: 30¢
          </Typography>
        </Paper>
        <Stack spacing={20} direction="row" sx={{ paddingTop: 5 }}>
          <Button
            onClick={() => navigate("/enter-park")}
            variant="contained"
            color="success"
            sx={{ fontSize: 40, width: 250, height: 80 }}
          >
            ENTER
          </Button>
          <Button
            onClick={() => navigate("/exit-park")}
            variant="contained"
            color="error"
            sx={{ fontSize: 40, width: 250, height: 80 }}
          >
            EXIT
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
