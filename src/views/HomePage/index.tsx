import { defineComponent } from "vue";
import makeStyles, { useTheme } from "vue3-makestyles";
import HeaderBanner from "@/views/HomePage/components/HeaderBanner";
import CatalogBanner from "@/views/HomePage/components/CatalogBanner";
import HomeBanner from "@/views/HomePage/components/HomeBanner";
import Promotions from "@/views/HomePage/components/Promotions";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
  },
}));

export default defineComponent({
  name: "HomePage",
  setup() {
    const classes = useStyles();
    const theme = useTheme();

    return () => (
      <div class={classes.container}>
        <HeaderBanner />
        <CatalogBanner />
        <HomeBanner />
        <Promotions />
      </div>
    );
  },
});
