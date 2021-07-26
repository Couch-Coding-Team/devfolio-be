import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Card, CardContent, CardMedia } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tag from "./Tag";
import IconLabel from "./IconLabel";

const Article = ({ article }) => {
  const classes = useStyles();
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;
  return (
    <Link to={`/article/${article.slug}`}>
      <Card style={{ padding: "48px", display: "flex", gap: "72px" }}>
        <CardMedia style={{ flex: "0 0 50%" }}>
          <div>
            <img src={imageUrl} alt={article.image.url} width="100%" />
          </div>
        </CardMedia>
        <CardContent
          style={{
            // margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p className={classes.title}>{article.title}</p>
            <p>{article.description}</p>
            <Tag label={article.category.name} />
          </div>
          <div className={classes.cardFooter}>
            <IconLabel icon={<GitHubIcon />} label={article.author.name} />
            <IconLabel icon={<VisibilityIcon />} label="12" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default Article;
