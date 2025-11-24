"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAPI = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
class BookAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "http://openlibrary.org/";
    }
    getFavorites() {
        return this.get("people/caglarcercinli/lists/OL305534L/seeds.json");
    }
}
exports.BookAPI = BookAPI;
