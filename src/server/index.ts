import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../schema";
import { resolvers } from "../resolvers";
import express from "express";
import { ApplicationModule } from "../services/serviceManager/Application.module";
import { json } from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

export const buildContext = async (
  req: express.Request,
  application: ApplicationModule
) => {
  return application.context();
};

export function createApolloServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: false,
  });
}

export function createExpressApplication(
  server: any,
  application: ApplicationModule
) {
  const app = express();

  app.use(
    cors({
      origin: [
        "https://studio.apollographql.com",
        "http://localhost:3000",
        "http://localhost:4000",
      ],
      credentials: true,
    })
  );

  app.use(
    "/graphql",
    json(),
    expressMiddleware(server, {
      context: ({ req }) => buildContext(req, application),
    })
  );
  return app;
}
