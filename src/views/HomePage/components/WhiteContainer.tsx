import { defineComponent, toRefs } from "vue";
import makeStyles from "vue3-makestyles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    maxWidth: 350,
    border: `1px solid ${theme.palette.primary.peach}`,
    borderRadius: 8,
  },
}));

export default defineComponent({
  name: "WhiteContainer",
  setup() {
    const classes = useStyles();

    return () => <div class={classes.container}>WhiteContainer</div>;
  },
});
