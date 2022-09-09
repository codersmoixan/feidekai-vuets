import store from "store";
import { requestHeader } from "@/service/utils";
import Axios from "@/service/axios";
import { BASE_GQL_API_URL } from "@/service/utils";
import type { RequestConfig } from "@/service/type";
import type { AxiosResponse, AxiosRequestConfig } from "axios";

function requestInterceptors(config: AxiosRequestConfig): AxiosRequestConfig {
  return config;
}

function responseInterceptors(config: AxiosResponse): AxiosResponse {
  return config;
}

function responseInterceptorsCatch(err: any) {
  console.log(err, "响应失败");
}

function gqlConfig(): RequestConfig {
  const storeCode = store.get("store_code");
  const headers = storeCode ? { Store: storeCode } : {};

  return {
    url: BASE_GQL_API_URL,
    headers: requestHeader(headers),
    interceptors: {
      requestInterceptors,
      responseInterceptors,
      responseInterceptorsCatch,
    },
  };
}

const request = new Axios(gqlConfig()) as any;
export const requestGql = request.requestGql.bind(request);

export default request;
