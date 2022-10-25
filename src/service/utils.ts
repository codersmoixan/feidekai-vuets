import { getAuthorization } from "@/utils/auth";
import type { AxiosRequestHeaders } from "axios";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
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
