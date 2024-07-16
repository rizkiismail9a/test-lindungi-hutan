import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const instanse = axios.create({
    baseURL: useRuntimeConfig().public.baseUri,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    params,
  });

  return instanse;
};

const ArticleServices = {
  getArticles: (): Promise<AxiosResponse> => {
    return API().get("/articles");
  },
};

export default ArticleServices;
