import { Book } from "./models";

export const resolvers = {
  Query: {
    favoriteBooks: async (_, __, { dataSources }): Promise<Book> => {
      const result = (await dataSources.bookAPI.getFavorites()).entries;
      const resumepoint = (await dataSources.resumepointAPI.getResumePoint())
        .resumepoint;
      // TODO: add mapping to resumepoint
      result.forEach((book) => {
        book.resumepoint = resumepoint;
      });
      return result;
    },
  },
};
