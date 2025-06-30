import React from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Home from "./components/Home/Home";

// Import Roboto font from Google Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        minHeight="100vh"
        sx={{ background: theme.palette.primary.main }}
        px={2}
      >
        <Home />
      </Box>
    </ThemeProvider>
  );
}
