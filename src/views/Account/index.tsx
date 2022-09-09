import { defineComponent, toRefs } from "vue";
import makeStyles from "vue3-makestyles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "200px",
    height: "200px",
    backgroundColor: "red",
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.breakpoints.up,
    },
  },
}));

export default defineComponent({
  name: "Account",
  props: {},
  setup(props) {
    const {} = toRefs(props);
    const classes = useStyles();

    return () => <div class={classes.container}>account</div>;
  },
});
