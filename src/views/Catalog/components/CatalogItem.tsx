import { defineComponent, ref, toRefs } from "vue";
import makeStyles from "vue3-makestyles";
import styled from "vue3-styled-components";
import ItemInfo from "@/views/Catalog/components/ItemInfo";

const useStyles = makeStyles((theme, props) => ({
  root: {
    color: props?.bgColor,
  },
}));

const Container = styled(ItemInfo)`
  width: 200px;
  height: 200px;
  background-color: red;
`;

interface Props {
  items: object;
}

const prop = {
  active: String,
  spacing: Number,
};

export default defineComponent({
  name: "CatalogItem",
  props: {
    items: Array,
    name: String,
    ...prop,
  },
  setup(props, { attrs }) {
    const value = ref(0);
    const classes = useStyles(props);
    const { items } = toRefs(props);

    console.log(props, "CatalogItem");

    return () => (
      <div class={classes.root}>
        CatalogItem
        <Container />
        <div>
          {items.value?.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    );
  },
});
