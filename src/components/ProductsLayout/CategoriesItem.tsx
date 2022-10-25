import { defineComponent, toRefs } from "vue";
import makeStyles from "vue3-makestyles";
import type { PropType } from "vue";
import type { CategoriesItemOptions } from "@/views/Catalog/types";
import Typography from "@/components/Typography/Typography";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: 8,
    border: `1px solid ${theme.palette.primary.darkPeach}`,
    backgroundColor: theme.palette.primary.white,
  },
  img: {
    width: 88,
    height: 88,
  },
  title: {
    marginTop: theme.spacing(0.5),
  },
}));

export default defineComponent({
  name: "CategoriesItem",
  props: {
    item: {
      type: Object as PropType<CategoriesItemOptions>,
    },
    className: String,
  },
  setup(props) {
    const { item, className } = toRefs(props);
    const classes = useStyles();

    return () => (
      <div class={clsx(classes.root, className.value)}>
        <div class={classes.imageContainer}>
          <img src={item.value?.image} alt="" class={classes.img} />
        </div>
        <Typography variant="caption" class={classes.title}>
          {item.value?.name}
        </Typography>
      </div>
    );
  },
});
