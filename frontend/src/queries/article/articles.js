import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      slug
      title
      description
      category {
        slug
        name
      }
      image {
        url
      }
      author {
        name
      }
    }
  }
`;

export default ARTICLES_QUERY;
