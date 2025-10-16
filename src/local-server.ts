import { createApolloServer } from "./server/index";
import { BookAPI } from "./datasources/book-api";
import { startStandaloneServer } from "@apollo/server/standalone";

(async function () {
  const application = {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          bookAPI: new BookAPI({ cache }),
        },
      };
    },
  };
  const server = createApolloServer();
  const { url } = await startStandaloneServer(server, application);
  console.log(`
    🚀  Server is running!
    📭  Query at  ${url}
  `);
})();
