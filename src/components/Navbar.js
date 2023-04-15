import { Box, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SyncIcon from "@mui/icons-material/Sync";

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
          <Box
            position="absolute"
            sx={{
              textAlign: "center",
              width: "100%",
              typography: "h3",
              fontWeight: "regular",
              fontFamily: `'Zen Dots', cursive`,
              color: "yellow",
            }}
          >
            5
          </Box>
          <SyncIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </>
  );
}
