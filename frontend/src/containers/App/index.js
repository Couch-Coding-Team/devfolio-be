import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "../../index.css";

import Nav from "../../components/Nav";
import Home from "../Home";
import Article from "../Article";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Roboto, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 768,
      md: 1440,
      lg: 1920,
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#1302F4",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "10px 20px",
        borderRadius: 0,
      },
    },
    MuiChip: {
      root: {
        padding: "0 12px",
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Container maxWidth="lg" style={{ padding: "140px" }}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/article/:id" component={Article} exact />
          </Switch>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
