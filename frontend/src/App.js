import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Nav from "./components/Nav";
import Home from "./containers/Home";
import Project from "./containers/Project";
import { routes } from "./constants/routes";

const ROUTES = [
  { path: "/", component: Home, exact: true },
  { path: routes.PROJECT, component: Project, exact: true },
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Container maxWidth="lg">
          <Switch>
            {ROUTES.map((route) => (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

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
    MuiCssBaseline: {
      "@global": {
        body: {
          "& a": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiContainer: {
      root: {
        "@media (min-width: 768px)": {
          padding: "140px",
        },
      },
    },
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
