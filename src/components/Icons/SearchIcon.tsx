import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "SearchIcon",
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
            d="M12.7 11.3c.9-1.2 1.4-2.6 1.4-4.2 0-3.9-3.1-7.1-7-7.1S0 3.2 0 7.1c0 3.9 3.2 7.1 7.1 7.1 1.6 0 3.1-.5 4.2-1.4l3 3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-3-3.1zm-5.6.8c-2.8 0-5.1-2.2-5.1-5S4.3 2 7.1 2s5.1 2.3 5.1 5.1-2.3 5-5.1 5z"
            fill={fill.value}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  },
});
