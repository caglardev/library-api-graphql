import { createApolloServer, createExpressApplication } from "./server/index";
import { ApplicationModule } from "./services/serviceManager/Application.module";
import * as http from "http";

(async function () {
  const applicationModule = await ApplicationModule();
  const server = createApolloServer();

  await server.start();

  const app = createExpressApplication(server, applicationModule);
  const httpServer = http.createServer(app);

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
})();
