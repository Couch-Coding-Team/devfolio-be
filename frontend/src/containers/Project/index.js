import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Button, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import PROJECT_QUERY from "../../queries/project";
import Query from "../../components/Query";
import Tag from "../../components/Tag";
import IconLabel from "../../components/IconLabel";

const Project = () => {
  const { id } = useParams();
  const classes = useStyles();

  return (
    <Query query={PROJECT_QUERY} slug={id}>
      {({ data: { projects } }) => {
        if (projects.length) {
          const project = projects[0];

          return (
            <div className={classes.root}>
              <h1>{project.title}</h1>
              {project.tech_stacks.map((stack) => (
                <Tag key={stack.name} label={stack.name} />
              ))}
              <div className={classes.details}>
                <div className={classes.detailsLeft}>
                  <a
                    href={project.owner_github_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconLabel
                      icon={<GitHubIcon />}
                      label={project.owner_name}
                    />
                  </a>
                  <span className={classes.date}>
                    {moment(project.published_at).format("MMM Do YYYY")}
                  </span>
                </div>
                <div>
                  {project.demo_site_url && (
                    <Button
                      color="primary"
                      variant="contained"
                      href={project.demo_site_url}
                      target="_blank"
                      onClick={() =>
                        window.gtag("event", "데모사이트 보러가기 클릭", {
                          project_id: project.id,
                        })
                      }
                      className={classes.button}
                    >
                      데모사이트 보러가기
                    </Button>
                  )}
                  <Button
                    color="secondary"
                    variant="contained"
                    href={project.project_github_url}
                    target="_blank"
                    onClick={() =>
                      window.gtag("event", "소스 보러가기 클릭", {
                        project_id: project.id,
                      })
                    }
                    className={classes.button}
                  >
                    GitHub 소스 보러가기
                  </Button>
                </div>
              </div>

              <img
                src={project.thumbnail_url}
                alt={project.thumbnail_url}
                className={classes.banner}
              />
              <ReactMarkdown
                children={project.readme_code}
                components={{
                  img: ({ node, ...props }) => (
                    <img style={{ maxWidth: "100%" }} {...props} /> // Resizing images inside README to fit container
                  ),
                }}
              />
            </div>
          );
        }
      }}
    </Query>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiChip-root": {
      marginRight: "8px",
    },
    "& blockquote": {
      background: "#f9f9f9",
      borderLeft: "10px solid #ccc",
      margin: "1.5em 10px",
      padding: "0.5em 10px",
    },
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "104px",
  },
  detailsLeft: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  date: {
    height: "1.3em",
  },
  button: {
    marginRight: "24px",
  },
  banner: {
    margin: "72px 0",
    height: "auto",
    objectFit: "none",
    width: "100%",
  },
}));

export default Project;
