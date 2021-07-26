import React from "react";
import Article from "./Article";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Articles = ({ articles }) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="최신순" />
        <Tab label="인기순" />
      </Tabs>
      {articles.map((article, i) => {
        return <Article article={article} key={`article__${article.slug}`} />;
      })}
    </>
  );
};

export default Articles;
