import { getAuthorization } from "@/utils/auth";
import type { AxiosRequestHeaders } from "axios";

export const BASE_API_URL = "https://api.feidekai.preview.alpha.tmogroup.asia";
export const BASE_GQL_API_URL = `${BASE_API_URL}/graphql`;

export function requestHeader<T>(header?: T): AxiosRequestHeaders {
  const auth = getAuthorization();
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...header,
  };

  return auth.type === "user" || auth.type === "socialmarketer"
    ? {
        ...defaultHeaders,
        Authorization: `Bearer ${auth.token}`,
      }
    : { ...defaultHeaders };
}
