import { defineComponent, reactive, watchEffect } from "vue";
import useProducts from "@/views/Catalog/hooks/useProducts";
import makeStyles from "vue3-makestyles";
import Search from "@/components/Search";

const useStyles = makeStyles((theme) => ({
  _root: {
    padding: theme.spacing(2),
  },
  search: {
    backgroundColor: theme.palette.primary.peach,
    boxShadow: "none",
    "& .arco-typography": {
      color: theme.palette.primary.secondary,
    },
  },
}));

export default defineComponent({
  name: "Catalog",
  setup() {
    const classes = useStyles();
    const { categories, products } = useProducts();

    return () => {
      return (
        <div class={classes._root}>
          <Search placeholder="搜索关键字" class={classes.search} />
          <div></div>
        </div>
      );
    };
  },
});
