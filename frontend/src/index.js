import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./utils/apolloClient";
import App from "./App";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
