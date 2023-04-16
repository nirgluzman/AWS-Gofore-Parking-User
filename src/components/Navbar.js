import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

export function Navbar() {
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
        </Toolbar>
      </AppBar>
    </>
  );
}
