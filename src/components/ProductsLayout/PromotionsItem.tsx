import { defineComponent } from "vue";
import makeStyles from "vue3-makestyles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    borderRadius: 8,
    border: `1px solid ${theme.palette.primary.darkPeach}`,
  },
}));

export default defineComponent({
  name: "PromotionsItem",
  setup() {
    const classes = useStyles();

    return () => (
      <div class={classes.container}>
        <div></div>
        <div></div>
      </div>
    );
  },
});
