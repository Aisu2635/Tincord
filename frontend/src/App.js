import { useMemo } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePg from "scenes/home";
import LoginPg from "scenes/login";
import ProPg from "scenes/profile";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPg />} />
          <Route path="/home" element={<HomePg />} />
          <Route path="/profile/:userId" element={<ProPg/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
}

export default App;
