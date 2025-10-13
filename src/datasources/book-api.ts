import { RESTDataSource } from "@apollo/datasource-rest";
import { FavoritesApiResponseModel } from "../models";

export class BookAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://openlibrary.org/people/caglarcercinli/lists/OL305534L/";

  getFavorites() {
    const result = this.get<FavoritesApiResponseModel[]>("seeds.json");
    return result;
  }
}
