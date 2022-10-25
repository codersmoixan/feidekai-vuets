import { defineComponent } from "vue";
import MainNavigation from "./MainNavigation";
import makeStyles from "vue3-makestyles";

const useStyles = makeStyles(
  (theme) => ({
    routeView: {
      marginBottom: theme.spacing(8),
      boxSizing: "border-box",
    },
  }),
  {
    name: "Layout",
  }
);

export default defineComponent({
  name: "Layout",
  setup(props, { slots }) {
    const classes = useStyles();

    return () => (
      <>
        <div class={classes.routeView}>{slots.default && slots.default()}</div>
        <MainNavigation />
      </>
    );
  },
});
