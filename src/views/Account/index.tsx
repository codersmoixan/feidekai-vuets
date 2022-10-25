import { defineComponent, toRefs } from "vue";
import makeStyles, { Hidden, useTheme } from "vue3-makestyles";
import Test from "@/views/Account/components/Test";
import styled from "vue3-styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette?.primary?.main,
    [theme.breakpoints.up("md")]: {
      backgroundColor: "blue",
    },
  },
  top: {
    height: 150,
    backgroundColor: theme.palette?.primary?.peach,
    "& .banner": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 32,
      color: "black",
    },
  },
  center: {
    flex: 1,
  },
  centerContent: {
    display: "flex",
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      height: 150,
    },
    "& .left": {
      backgroundColor: "blue",
    },
    "& .right": {
      backgroundColor: "yellow",
    },
  },
  footer: {
    display: "flex",
    height: 59,
    backgroundColor: "white",
  },
  footerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
  },
}));

export default defineComponent({
  name: "Account",
  props: {},
  setup(props) {
    const classes = useStyles();
    const theme = useTheme();

    console.log(theme, "这个还能获取到吗");

    return () => (
      <>
        <div class={classes.root}>
          <div class={classes.top}>
            <div class="banner">这是一个banner</div>
          </div>
          <div class={classes.center}>
            <div class={classes.centerContent}>
              <div class="left">
                这是左边的
                <Test />
              </div>
              <div class="right">这是右边的</div>
            </div>
          </div>
          <div class={classes.footer}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} class={classes.footerItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  },
});
