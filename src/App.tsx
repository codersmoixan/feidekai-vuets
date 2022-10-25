import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { ThemeProvider } from "vue3-makestyles";
import theme from "@/theme";
import { Layout } from "@/components/Layout/index";
import { VueQueryDevTools } from "vue-query/devtools";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <ThemeProvider theme={theme}>
          <Layout>
            <RouterView />
          </Layout>
        </ThemeProvider>
        <VueQueryDevTools />
      </>
    );
  },
});
