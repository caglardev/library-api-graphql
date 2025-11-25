import { Book } from "./models";

export const resolvers = {
  Query: {
    favoriteBooks: async (_, __, { dataSources }): Promise<Book> => {
      return (await dataSources.bookAPI.getFavorites()).entries;
    },
  },
  Book: {
    resumepoint: async (parent, __, { dataSources }, info) => {
      const resumepointData = (
        await dataSources.resumepointAPI.getResumePoint()
      ).resumepoint;
      return resumepointData;
    },
  },
};
