import { useState, useEffect } from "react";

import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

export function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString("en-GB")),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="xxlarge"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <LocalParkingIcon sx={{ border: 2 }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GOFORE Parking Garage
          </Typography>
          <Typography variant="h6" component="div">
            {time}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
