import { RESTDataSource } from "@apollo/datasource-rest";
import { FavoritesApiResponseModel } from "../models";

export class BookAPI extends RESTDataSource {
  baseURL = "http://openlibrary.org/";

  getFavorites() {
    return this.get<FavoritesApiResponseModel[]>(
      "people/caglarcercinli/lists/OL305534L/seeds.json"
    );
  }
}
