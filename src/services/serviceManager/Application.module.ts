import { BookAPI } from "../../datasources/book-api";
import { DataSourceContext } from "../../context";

export type ApplicationModule = {
  context: () => Promise<DataSourceContext>;
};

export async function ApplicationModule(): Promise<ApplicationModule> {
  return {
    context: async () => {
      return {
        dataSources: {
          bookAPI: new BookAPI(),
        },
      };
    },
  };
}
