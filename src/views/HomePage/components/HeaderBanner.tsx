import { defineComponent } from "vue";
import makeStyles, { Hidden, useTheme } from "vue3-makestyles";
import Typography from "@/components/Typography/Typography";
import { SearchIcon, SwooshIcon } from "@/components/Icons";
import Buttons from "@/components/Buttons/Buttons";
import { useRouter } from "vue-router";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.peach,
  },
  container: {
    padding: theme.spacing(0, 2),
  },
  search: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: "0 0 16px rgb(0 0 0 / 8%)",
    borderRadius: 8,
    backgroundColor: theme.palette.primary.white,
    zIndex: 2,
  },
  placeholder: {
    marginLeft: theme.spacing(1),
  },
  bannerRoot: {
    display: "flex",
    paddingTop: theme.spacing(4.75),
    position: "relative",
    height: 255,
    "&::after": {
      content: "''",
      display: "inline-block",
      position: "absolute",
      top: theme.spacing(-3),
      right: 0,
      width: 144,
      height: 277,
      backgroundColor: theme.palette.secondary.peach,
      borderRadius: 94,
      zIndex: 1,
    },
  },
  checkBtn: {
    marginTop: theme.spacing(2),
  },
  imageRoot: {
    position: "relative",
    width: 144,
    height: 164,
    zIndex: 2,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  swooshIcon: {
    marginTop: theme.spacing(2),
    "& svg": {
      verticalAlign: "bottom",
    },
  },
}));

export default defineComponent({
  name: "HeaderBanner",
  setup() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useRouter();

    return () => (
      <div class={classes.root}>
        <div class={classes.container}>
          <Hidden mdUp>
            <Typography variant="h2">Fitline非德凯中国旗舰店小程序</Typography>
          </Hidden>
          <div class={classes.search}>
            <SearchIcon width={16} height={16} />
            <Typography color="disabled" class={classes.placeholder}>
              非德凯小红
            </Typography>
          </div>
          <div class={classes.bannerRoot}>
            <div>
              <Typography color="main" variant="caption" display="block">
                最佳组合
              </Typography>
              <Typography variant="h1" display="block">
                FitLine 非德凯
              </Typography>
              <Typography variant="h1" display="block">
                家庭营养补充套装
              </Typography>
              <Buttons class={classes.checkBtn}>立即查看商品</Buttons>
            </div>
            <div class={classes.imageRoot}>
              <img
                src="https://api.feidekai.preview.alpha.tmogroup.asia/media/aw_rbslider/slides/Bitmap_2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class={classes.swooshIcon}>
          <SwooshIcon bFill={theme.palette.primary.white} />
        </div>
      </div>
    );
  },
});
