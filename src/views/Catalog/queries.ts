import { useQuery } from "vue-query";
import { requestGql } from "@/service";
import queryGetAllProducts from "@/views/Catalog/gqls/queryGetAllProducts";
import { querySetting } from "@/service/requestGql";
import queryGetCategories from "@/views/Catalog/gqls/queryGetCategories";
import get from "lodash/get";

export const useGetProducts = () =>
  useQuery(
    ["catalog.getProducts"],
    () => requestGql({ query: queryGetAllProducts() }),
    querySetting
  );

export const useGetCategories = () =>
  useQuery(
    ["catalog.getCategories"],
    () =>
      requestGql({ query: queryGetCategories }).then((res) =>
        get(res, "category.children", [])
      ),
    querySetting
  );
