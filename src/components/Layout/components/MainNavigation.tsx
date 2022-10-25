import { defineComponent, onMounted, ref, watch, watchEffect } from "vue";
import makeStyles, { useMediaQuery, useTheme } from "vue3-makestyles";
import {
  AccountIcon,
  BlogIcon,
  CartIcon,
  CatalogIcon,
  HomeIcon,
} from "@/components/Icons";
import Typography from "@/components/Typography/Typography";
import clsx from "clsx";
import routes from "@/router/routes";
import { useRoute, useRouter } from "vue-router";

const useStyles = makeStyles((theme) => ({
  _root: {
    position: "fixed",
    bottom: 0,
    paddingBottom: theme.spacing(1.75),
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
    height: 64,
    borderTop: `2px solid ${theme.palette.primary.peach}`,
    backgroundColor: theme.palette.primary.white,
    boxSizing: "border-box",
    zIndex: 999,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: theme.spacing(1.75),
    marginTop: "-2px",
    borderTop: `2px solid ${theme.palette.primary.transparent}`,
    boxSizing: "border-box",
    transition: theme.mixins.transition,
  },
  active: {
    color: theme.palette.primary.main,
    borderColor: "currentColor",
    "& .arco-typography": {
      color: "currentColor",
      fontWeight: 700,
    },
  },
  icon: {
    width: 24,
    height: 24,
    color: theme.palette.primary.secondary,
  },
}));

const navList = [
  {
    id: "home",
    title: "首页",
    icon: HomeIcon,
    url: routes.home,
  },
  {
    id: "catalog",
    title: "分类",
    icon: CatalogIcon,
    url: routes.catalog,
  },
  {
    id: "blog",
    title: "经验",
    icon: BlogIcon,
    url: routes.blog,
  },
  {
    id: "cart",
    title: "购物车",
    icon: CartIcon,
    url: routes.cart,
  },
  {
    id: "account",
    title: "我的",
    icon: AccountIcon,
    url: routes.account,
  },
];

interface Obj {
  name: string;
  age: number;
  count: (a: number, b: number) => number;
  count1: (a: number, b: number) => number;
}

const obj = {
  name: "lau",
  age: 18,
  count(a: number, b: number): number {
    return a + b;
  },
  count1: (a: number, b: number): number => a + b,
};

export default defineComponent({
  name: "MainNavigation",
  setup() {
    const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const theme = useTheme();
    const classes = useStyles();
    const history = useRouter();
    const route = useRoute();

    const active = ref("");

    const handleClick = (item: Record<string, any>) => {
      active.value = item.id;
      history.push(item.url);
    };

    watch(route, (newVal) => {
      const path = newVal.path;
      active.value = navList.filter((i) => i.url === path)[0]?.id;
    });

    return () => (
      <div class={classes._root}>
        {navList.map((item) => {
          const isActive = item.id === active.value;

          return (
            <div
              key={item.id}
              class={clsx(classes.item, {
                [classes.active]: isActive,
              })}
              onClick={() => handleClick(item)}
            >
              <div class={classes.icon}>
                <item.icon
                  fill={theme.palette.primary[isActive ? "main" : "secondary"]}
                />
              </div>
              <Typography variant="caption">{item.title}</Typography>
            </div>
          );
        })}
      </div>
    );
  },
});
