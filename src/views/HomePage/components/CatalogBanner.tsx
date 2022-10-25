import { defineComponent } from "vue";
import Typography from "@/components/Typography/Typography";
import makeStyles, { useTheme } from "vue3-makestyles";
import useProducts from "@/views/Catalog/hooks/useProducts";
import CategoriesItem from "@/components/ProductsLayout/CategoriesItem";
import type { CategoriesItemOptions } from "@/views/Catalog/types";
import Buttons from "@/components/Buttons/Buttons";
import SwooshWave from "@/components/SwooshWave";

const useStyles = makeStyles((theme) => ({
  _root: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
  title: {
    padding: theme.spacing(0, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  categories: {
    position: "relative",
  },
  banner: {
    position: "relative",
    paddingLeft: theme.spacing(2),
    display: "flex",
    overflowX: "scroll",
    marginTop: theme.spacing(2),
    width: "100%",
    zIndex: 9,
  },
  checkAll: {
    marginTop: theme.spacing(2.25),
  },
  catalogItem: {
    marginRight: theme.spacing(2),
  },
  swooshIcon: {
    position: "absolute",
    top: 50,
    width: "100%",
    height: 150,
    zIndex: 1,
    backgroundColor: theme.palette.primary.secondaryPeach,
    "& svg": {},
  },
}));

export default defineComponent({
  name: "CatalogBanner",
  setup(props) {
    const classes = useStyles();
    const theme = useTheme();

    const { categories } = useProducts();

    return () => (
      <div class={classes._root}>
        <div class={classes.title}>
          <Typography variant="h2">非德凯产品类别</Typography>
          <Typography variant="caption" color="secondary">
            你需要的都在这里
          </Typography>
        </div>
        <Buttons
          type="text"
          color="main"
          variant="caption"
          bold={700}
          border
          class={classes.checkAll}
        >
          查看全部商品
        </Buttons>
        <div class={classes.categories}>
          <div class={classes.banner}>
            {categories.value?.map((item: CategoriesItemOptions) => (
              <CategoriesItem
                key={item.id}
                item={item}
                class={classes.catalogItem}
              />
            ))}
          </div>
          <div class={classes.swooshIcon}>
            <SwooshWave isTop fill={theme.palette.primary.white} />
          </div>
        </div>
      </div>
    );
  },
});
