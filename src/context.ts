import { BookAPI } from "./datasources/book-api";
import { ResumepointAPI } from "./datasources/resumepoint-api";

export type DataSourceContext = {
  dataSources: {
    bookAPI: BookAPI;
    resumepointAPI: ResumepointAPI;
  };
};
