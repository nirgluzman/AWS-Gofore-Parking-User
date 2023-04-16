import { Box, Stack, Avatar, Typography, Paper, Button } from "@mui/material";

import parkSign from "../images/park-sign.png";

export function Home() {
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
            fontWeight: "regular",
            fontFamily: `'Big Shoulders Inline Text', cursive`,
            color: "yellow",
          }}
        >
          5
        </Box>
        <Paper
          elevation={2}
          sx={{
            width: 500,
            height: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline" }}
            gutterBottom
          >
            Hourly Parking Price List
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Up to 10 minutes free
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            First 3 hours: 50¢
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Next hours: 30¢
          </Typography>
        </Paper>
        <Stack spacing={20} direction="row" sx={{ paddingTop: 5 }}>
          <Button
            variant="contained"
            color="success"
            sx={{ fontSize: 50, width: 300, height: 100 }}
          >
            ENTER
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ fontSize: 50, width: 300, height: 100 }}
          >
            EXIT
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
