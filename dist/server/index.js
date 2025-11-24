"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildContext = void 0;
exports.createApolloServer = createApolloServer;
exports.createExpressApplication = createExpressApplication;
const server_1 = require("@apollo/server");
const schema_1 = require("../schema");
const resolvers_1 = require("../resolvers");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const express4_1 = require("@apollo/server/express4");
const cors_1 = __importDefault(require("cors"));
const buildContext = async (application) => {
    return application.context();
};
exports.buildContext = buildContext;
function createApolloServer() {
    return new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        csrfPrevention: false, // Disable CSRF protection for development
    });
}
function createExpressApplication(server, application) {
    const app = (0, express_1.default)();
    // Enable CORS for Apollo Studio Sandbox
    app.use((0, cors_1.default)({
        origin: [
            "https://studio.apollographql.com",
            "http://localhost:3000",
            "http://localhost:4000",
        ],
        credentials: true,
    }));
    app.use("/graphql", (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(server, {
        context: () => (0, exports.buildContext)(application),
    }));
    return app;
}
