import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }) => {
          return <Articles articles={articles} />;
        }}
      </Query>
    </>
  );
};

export default Home;
