import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  TextField,
  Box,
  Container,
  Alert,
  AlertTitle,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";

import axios from "axios";

export function ExitPark() {
  const [parkExitMessage, setParkExitMessage] = useState(null);
  const [exitError, setExitError] = useState("");

  const navigate = useNavigate();

  const handleParkExit = async (event) => {
    event.preventDefault();

    setExitError("");
    setParkExitMessage(null);

    const data = new FormData(event.currentTarget);
    const vrn = data.get("vrn");

    try {
      const result = await axios.put(process.env.REACT_APP_API_URL + "remove", {
        vrn,
      });
      if (result.data.length === 0) {
        throw new Error("An error occurred, please try again!");
      }

      console.log(result.data);
      setParkExitMessage(result.data);
    } catch (err) {
      setExitError(err.response.data);
      console.log(err);
    }
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
        {parkExitMessage && (
          <Alert
            severity="success"
            onClose={() => {
              setParkExitMessage(null);
              navigate("/");
            }}
          >
            <AlertTitle>Success</AlertTitle>
            {parkExitMessage.message}
          </Alert>
        )}
        {exitError && (
          <Alert
            severity="error"
            onClose={() => {
              setExitError("");
            }}
          >
            <AlertTitle>Error</AlertTitle>
            {exitError}
          </Alert>
        )}
        <Box component="form" onSubmit={handleParkExit} sx={{ mt: 3 }}>
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
            Exit Parking
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
        {parkExitMessage && (
          <TableContainer
            component={Paper}
            sx={{
              maxWidth: "600px",
              margin: "auto",
              marginTop: "30px",
              marginBottom: "20px",
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" textAlign="center">
              Parking Invoice
            </Typography>
            <Table size="medium" aria-label="parking invoice">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" component="th" scope="row">
                    Vehicle Registration Number
                  </TableCell>
                  <TableCell>{parkExitMessage.vrn}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" component="th" scope="row">
                    Start time
                  </TableCell>
                  <TableCell>{parkExitMessage.startTime}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" component="th" scope="row">
                    End time
                  </TableCell>
                  <TableCell>{parkExitMessage.endTime}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    Parking costs
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {parkExitMessage.parkCosts} €
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Container>
  );
}
