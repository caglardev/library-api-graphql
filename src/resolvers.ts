import { hash } from "crypto";
import { Book } from "./models";

export const resolvers = {
  Query: {
    favoriteBooks: async (_, __, { dataSources }): Promise<Book> => {
      return (await dataSources.bookAPI.getFavorites()).entries;
    },
  },
  Book: {
    resumepoint: async (parent, __, { dataSources }) => {
      const id = hash("sha1", parent.full_url);
      return (await dataSources.resumepointAPI.getResumePoint(id)
        .resumepoint;
    },
  },
};
