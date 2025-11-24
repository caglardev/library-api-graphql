"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        favoriteBooks: async (_, __, { dataSources }) => {
            return (await dataSources.bookAPI.getFavorites()).entries;
        },
    },
};
