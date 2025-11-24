"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = ApplicationModule;
const book_api_1 = require("../../datasources/book-api");
async function ApplicationModule() {
    return {
        context: async () => {
            return {
                dataSources: {
                    bookAPI: new book_api_1.BookAPI(),
                },
            };
        },
    };
}
