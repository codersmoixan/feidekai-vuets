import { defineComponent } from "vue";
import { useGetCategories, useGetProducts } from "@/views/Catalog/queries";

export default defineComponent({
  name: "Catalog",
  setup() {
    const { data, isLoading } = useGetProducts();
    const { data: categories } = useGetCategories();

    console.log(categories, "这个呢");

    return () => {
      return <div>Catalog</div>;
    };
  },
});
