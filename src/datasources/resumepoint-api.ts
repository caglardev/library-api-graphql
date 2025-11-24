import { RESTDataSource } from "@apollo/datasource-rest";
import { ResumepointApiResponseModel } from "../models";

export class ResumepointAPI extends RESTDataSource {
  baseURL = "http://localhost:3001/";

  getResumePoint() {
    return this.get<ResumepointApiResponseModel>("resumepoint");
  }
}
