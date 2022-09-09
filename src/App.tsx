import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { requestGql } from "@/service";
import queryGetAllProducts from "@/utils/queryGetAllProducts";
// import ThemeProvider from "@/components/Theme/ThemeProvider";
import { ThemeProvider } from "vue3-makestyles";
import theme from "@/theme";
import { MainNavigation } from "@/components/Layout/index";

export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      requestGql({ query: queryGetAllProducts() });
    });

    console.log(theme, "这个呢");

    return () => (
      <ThemeProvider theme={theme}>
        <RouterView />
        <MainNavigation />
      </ThemeProvider>
    );
  },
});
