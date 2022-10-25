import { defineComponent } from "vue";
import makeStyles from "vue3-makestyles";
import Typography from "@/components/Typography/Typography";
import Buttons from "@/components/Buttons/Buttons";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2.25, 2, 3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default defineComponent({
  name: "Promotions",
  setup() {
    const classes = useStyles();

    return () => (
      <div class={classes.container}>
        <div class={classes.header}>
          <Typography variant="h2">非德凯促销活动</Typography>
          <Buttons type="text" bold={700} border color="main" variant="caption">
            查看全部促销商品
          </Buttons>
        </div>
      </div>
    );
  },
});
