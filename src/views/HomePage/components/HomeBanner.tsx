import { defineComponent } from "vue";
import SwooshWave from "@/components/SwooshWave";
import homeBannerImageOne from "@/assets/images/home/banner1.jpg";
import homeBannerImageThree from "@/assets/images/home/banner3.jpg";
import familyGrapeOne from "@/assets/images/home/family_grape1.png";
import familyGrapeTwo from "@/assets/images/home/family_grape2.png";
import makeStyles, { useTheme } from "vue3-makestyles";
import theme from "@/theme";

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    backgroundColor: "aliceblue",
    "& img": {
      verticalAlign: "middle",
    },
  },
  mainBanner: {
    position: "relative",
    zIndex: 7,
    "& img": {
      width: "100%",
    },
  },
  wave: {
    zIndex: 9,
  },
  banner3: {
    position: "relative",
    width: "100%",
  },
  familyGrapeAll: {
    overflow: "hidden",
    height: 87,
    "& img": {
      width: "100%",
    },
  },
  familyGrape: {
    position: "absolute",
    width: 49,
    height: 49,
    zIndex: 99,
    "&:first-of-type": {
      top: 0,
      left: theme.spacing(3.375),
      transform: "translateY(-50%)",
    },
    "&:last-of-type": {
      right: theme.spacing(3.375),
      bottom: theme.spacing(2),
    },
  },
}));

export default defineComponent({
  name: "HomeBanner",
  setup(props) {
    const classes = useStyles();
    const theme = useTheme();

    return () => (
      <div class={classes.container}>
        <SwooshWave
          isTop
          fill={theme.palette.primary.secondaryPeach}
          class={classes.wave}
        />
        <div class={classes.mainBanner}>
          <img src={homeBannerImageOne} alt="banner1.jpg" />
        </div>
        <div class={classes.banner3}>
          <img
            src={familyGrapeOne}
            alt="banner3.jpg"
            class={classes.familyGrape}
          />
          <div class={classes.familyGrapeAll}>
            <img src={homeBannerImageThree} alt="banner3.jpg" />
          </div>
          <img
            src={familyGrapeTwo}
            alt="banner3.jpg"
            class={classes.familyGrape}
          />
          <SwooshWave fill={theme.palette.primary.white} class={classes.wave} />
        </div>
      </div>
    );
  },
});
