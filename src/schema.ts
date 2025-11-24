import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    favoriteBooks: [Book]
  }
  type Book {
    title: String!
    type: String
    last_update: String
    full_url: String
    resumepoint: Int
  }
`;
