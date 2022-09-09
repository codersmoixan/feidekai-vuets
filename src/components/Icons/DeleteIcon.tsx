import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "DeleteIcon",
  props: formatIconProps(),
  setup(props) {
    const { height, width, fill } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        view-box="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={fill.value}>
          <path
            d="M10.625 1c.525 0 .875.35.875.875v1.75H15v1.75h-.875v8.75c0 .525-.35.875-.875.875H2.75c-.525 0-.875-.35-.875-.875v-8.75H1v-1.75h3.5v-1.75c0-.525.35-.875.875-.875zm1.75 4.375h-8.75v7.875h8.75V5.375zM7 7v5H5V7h2zm4 0v5H9V7h2zM9.75 2.75h-3.5v.875h3.5V2.75z"
            fill={fill.value}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  },
});
