import { Route, Routes } from "react-router-dom";

import { CssBaseline } from "@mui/material"; // to kickstart an elegant, consistent, and simple baseline
import { Navbar, Home, EnterPark, ExitPark } from "./components";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enter-park" element={<EnterPark />} />
        <Route path="/exit-park" element={<ExitPark />} />
      </Routes>
    </>
  );
}

export default App;
