import React from "react";
import Projects from "../../components/Projects";
import Query from "../../components/Query";
import Hero from "./Hero";
import PROJECTS_QUERY from "../../queries/projects";

const Home = () => (
  <>
    <Hero />
    <Query query={PROJECTS_QUERY}>
      {({ data: { projects } }) => <Projects projects={projects} />}
    </Query>
  </>
);

export default Home;
