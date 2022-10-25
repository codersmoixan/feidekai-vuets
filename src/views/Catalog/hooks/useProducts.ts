import { useGetCategories, useGetProducts } from "@/views/Catalog/queries";
import { ref, watchEffect } from "vue";
import type { EmptyObject } from "@/feidekai.type";

interface ProductItem {
  id: number;
  sku: string;
  name: string;
  url_key: string;
  stock_status: string;
  price: number;
  cartCount: number;
  img: string;
  categoriesId: string;
  categoriesName: string;
}

const useProducts = () => {
  const { data: products, isLoading: getProductsLoading } = useGetProducts();
  const { data: categories, isLoading: getCategoriesLoading } =
    useGetCategories();

  const loading = ref<boolean>(false);

  watchEffect(() => {
    loading.value = getProductsLoading.value || getCategoriesLoading.value;
  });

  return {
    loading,
    products,
    categories,
  };
};

export default useProducts;
