import { defineComponent } from "vue";
import makeStyles, { useTheme } from "vue3-makestyles";
import SwooshWave from "@/components/SwooshWave";
import Typography from "@/components/Typography/Typography";
import Buttons from "@/components/Buttons/Buttons";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 2, 2),
    width: "100%",
    height: 200,
    backgroundColor: theme.palette.primary.secondaryPeach,
  },
  header: {
    textAlign: "center",
  },
  checkBtn: {
    marginTop: theme.spacing(1),
  },
  banners: {
    marginTop: theme.spacing(3),
  },
}));

export default defineComponent({
  name: "BlogBanner",
  setup() {
    const classes = useStyles();
    const theme = useTheme();

    return () => (
      <div class={classes.container}>
        <SwooshWave isTop fill={theme.palette.primary.white} />
        <div class={classes.header}>
          <Typography variant="h2">非德凯经验</Typography>
          <Buttons
            type="text"
            bold={700}
            color="main"
            variant="h6"
            border
            class={classes.checkBtn}
          >
            查看更多
          </Buttons>
        </div>
        <div class={classes.banners}></div>
      </div>
    );
  },
});
