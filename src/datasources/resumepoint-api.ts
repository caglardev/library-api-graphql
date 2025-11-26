import { RESTDataSource } from "@apollo/datasource-rest";
import { ResumepointApiResponseModel } from "../models";

export class ResumepointAPI extends RESTDataSource {
  baseURL = "http://localhost:3001/";

  // TODO fetch id specific resumepoint
  getResumePoint(id: string | undefined) {
    return this.get<ResumepointApiResponseModel>("resumepoint");
  }
}
