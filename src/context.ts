import { BookAPI } from "./datasources/book-api";

export type DataSourceContext = {
  dataSources: {
    bookAPI: BookAPI;
  };
};
