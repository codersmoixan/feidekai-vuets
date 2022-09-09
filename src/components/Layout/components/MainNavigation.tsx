import { defineComponent } from "vue";
import Buttons from "@/components/Buttons";
import useMediaQuery from "@/hooks/useMediaQuery";
import makeStyles from "vue3-makestyles";
import useTheme from "@/hooks/useTheme";
import FormText from "@/components/FormFields/FormText";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(2, 0),
    height: "57px",
  },
}));

export default defineComponent({
  name: "MainNavigation",
  setup() {
    const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const theme = useTheme();

    const classes = useStyles();

    return () => null;
  },
});
