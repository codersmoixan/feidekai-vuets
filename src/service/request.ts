import store from "store";
import { requestHeader } from "@/service/utils";
import Axios from "@/service/axios";
import { BASE_API_URL } from "@/service/utils";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { RequestConfig } from "@/service/type";

function requestInterceptors(config: AxiosRequestConfig): AxiosRequestConfig {
  return config;
}

function responseInterceptors(config: AxiosResponse): AxiosResponse {
  return config;
}

function responseInterceptorsCatch(err: any) {
  console.log(err, "响应失败");
}

function requestConfig(): RequestConfig {
  const storeCode = store.get("store_code");

  const apiUrl = `${BASE_API_URL}${storeCode || "chn_zh"}/V1`;

  return {
    url: apiUrl,
    headers: requestHeader(),
    interceptors: {
      requestInterceptors,
      responseInterceptors,
      responseInterceptorsCatch,
    },
  };
}

const baseRequest = new Axios(requestConfig());

export const request = baseRequest.request.bind(baseRequest);

export default baseRequest;
