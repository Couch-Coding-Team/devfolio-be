import React from "react";
import { Container } from "@material-ui/core";
import PROJECTS_QUERY from "../../queries/projects";
import Query from "../../components/Query";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => (
  <Container>
    <Hero />
    <Query query={PROJECTS_QUERY}>
      {({ data: { projects } }) => <Projects projects={projects} />}
    </Query>
  </Container>
);

export default Home;
