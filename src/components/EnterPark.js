import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, TextField, Box, Container } from "@mui/material";

export function EnterPark() {
  const [vrn, setVrn] = useState("");
  const [selectSpot, setSelectSpot] = useState(false);

  const navigate = useNavigate();

  const handleParkEnter = async (event) => {
    event.preventDefault();
    setVrn(new FormData(event.currentTarget));
    setSelectSpot(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleParkEnter} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            fullWidth
            required
            name="vrn"
            label="Registration Number"
            autoComplete="off"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            Let's find a parking place
          </Button>
          <Button
            onClick={() => navigate("/")}
            fullWidth
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
