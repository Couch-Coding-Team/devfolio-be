import React from "react";
import Project from "./Project";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";

const Projects = ({ projects }) => {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        style={{ margin: "36px auto" }}
      >
        <Tab label="최신순" />
        <Tab label="인기순" />
      </Tabs> */}
      {projects.map((project, i) => {
        return <Project project={project} key={`article__${project.id}`} />;
      })}
    </div>
  );
};

export default Projects;
