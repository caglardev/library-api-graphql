import { BookAPI } from "../../datasources/book-api";
import { DataSourceContext } from "../../context";
import { ResumepointAPI } from "../../datasources/resumepoint-api";

export type ApplicationModule = {
  context: () => Promise<DataSourceContext>;
};

export async function ApplicationModule(): Promise<ApplicationModule> {
  return {
    context: async () => {
      const dataSources: any = {};
      return {
        get dataSources() {
          return {
            get bookAPI() {
              if (!dataSources.bookAPI) {
                dataSources.bookAPI = new BookAPI();
              }
              return dataSources.bookAPI;
            },
            get resumepointAPI() {
              if (!dataSources.resumepointAPI) {
                dataSources.resumepointAPI = new ResumepointAPI();
              }
              return dataSources.resumepointAPI;
            },
          };
        },
      };
    },
  };
}
