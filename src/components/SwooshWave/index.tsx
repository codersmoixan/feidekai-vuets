import { defineComponent, toRefs } from "vue";
import makeStyles from "vue3-makestyles";
import TopWaveIcon from "@/components/Icons/TopWaveIcon";
import BottomWaveIcon from "@/components/Icons/BottomWaveIcon";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    transform: "rotate(180deg)",
    overflow: "hidden",
    position: "absolute",
    lineHeight: 0,
    left: 0,
    bottom: -1,
    height: 40,
    [theme.breakpoints.up("lg")]: {
      height: 140,
    },
  },
  topWave: {
    top: -1,
    bottom: "auto",
  },
  icon: {
    width: "300%",
    height: 40,
    transform: "rotateY(180deg)",
    [theme.breakpoints.up("lg")]: {
      height: 140,
    },
  },
}));

export default defineComponent({
  name: "SwooshWave",
  props: {
    isTop: Boolean,
    fill: String,
    class: String,
  },
  setup(props) {
    const { isTop, fill, class: className } = toRefs(props);
    const classes = useStyles();

    return () => (
      <div
        class={clsx(
          classes.root,
          { [classes.topWave]: isTop.value },
          className.value
        )}
      >
        {isTop.value ? (
          <TopWaveIcon class={classes.icon} fill={fill.value} />
        ) : (
          <BottomWaveIcon class={classes.icon} fill={fill.value} />
        )}
      </div>
    );
  },
});
