import { hash } from "crypto";
import { Book } from "./models";

export const resolvers = {
  Query: {
    favoriteBooks: async (_, __, { dataSources }): Promise<Book> => {
      return (await dataSources.bookAPI.getFavorites()).entries;
    },
  },
  Book: {
    resumepoint: async (_, __, { dataSources }) => {
      return (await dataSources.resumepointAPI.getResumePoint()).resumepoint;
    },
  },
};
