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
  const isAuth = Boolean(useSelector((state) => state.token));
  return <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPg />} />
          <Route path="/home" element={isAuth ? <HomePg /> : <Navigate to="/" />} />
          <Route path="/profile/:userId" element={isAuth ? <ProPg /> : <Navigate to="/" />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
}

export default App;
