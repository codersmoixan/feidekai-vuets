import { defineComponent, ref, toRefs } from "vue";
import makeStyles from "vue3-makestyles";
import { SearchIcon } from "@/components/Icons";
import clsx from "clsx";
import { Drawer } from "@arco-design/web-vue";
import Typography from "@/components/Typography/Typography";
import { AngleLeftIcon } from "@/components/Icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    boxShadow: "0 0 16px rgb(0 0 0 / 8%)",
    borderRadius: 8,
    backgroundColor: theme.palette.primary.white,
    zIndex: 2,
  },
  placeholder: {
    marginLeft: theme.spacing(1),
  },
  resultContainer: {
    padding: theme.spacing(2),
  },
  searchInput: {
    display: "flex",
    justifyContent: "space-between",
  },
  back: {
    display: "flex",
    justifyContent: "flex-start",
    width: 30,
    height: 56,
  },
}));

export default defineComponent({
  name: "Search",
  props: {
    placeholder: {
      type: String,
      default: "非德凯小红",
    },
    class: String,
  },
  setup(props) {
    const { placeholder, class: className } = toRefs(props);
    const classes = useStyles();

    const visible = ref(false);

    const handleOpenDrawer = () => {
      visible.value = true;
    };

    return () => (
      <>
        <div
          class={clsx(classes.root, className.value)}
          onClick={handleOpenDrawer}
        >
          <SearchIcon width={16} height={16} />
          <Typography color="secondary" class={classes.placeholder}>
            {placeholder.value}
          </Typography>
        </div>
        <Drawer
          width="100vw"
          height="100vh"
          visible={visible.value}
          footer={false}
          header={false}
        >
          <div class={classes.resultContainer}>
            <div class={classes.searchInput}>
              <div class={classes.back}>
                <AngleLeftIcon width="20px" height="20px" />
              </div>
              <div class={classes.input}></div>
            </div>
          </div>
        </Drawer>
      </>
    );
  },
});
