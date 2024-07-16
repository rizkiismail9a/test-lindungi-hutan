import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import type { FilterParams } from "~/types/filter.type";

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
  getArticles: (params: FilterParams): Promise<AxiosResponse> => {
    return API({ params }).get("/v2/top-headlines");
  },
};

export default ArticleServices;
