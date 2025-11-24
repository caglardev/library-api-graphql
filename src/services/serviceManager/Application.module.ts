import { BookAPI } from "../../datasources/book-api";
import { DataSourceContext } from "../../context";
import { ResumepointAPI } from "../../datasources/resumepoint-api";

export type ApplicationModule = {
  context: () => Promise<DataSourceContext>;
};

export async function ApplicationModule(): Promise<ApplicationModule> {
  return {
    context: async () => {
      return {
        dataSources: {
          bookAPI: new BookAPI(),
          resumepointAPI: new ResumepointAPI(),
        },
      };
    },
  };
}
