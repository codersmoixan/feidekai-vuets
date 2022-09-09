import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "AngleRightIcon",
  props: formatIconProps(),
  setup(props) {
    const { height, width, fill } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        view-box="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M4.226 9.62l-.297-.312a.5.5 0 0 1 0-.69l2.166-2.273a.5.5 0 0 0 0-.69L3.929 3.382a.5.5 0 0 1 0-.69l.297-.312a.5.5 0 0 1 .724 0l3.121 3.275a.5.5 0 0 1 0 .69L4.951 9.62a.5.5 0 0 1-.725 0z"
            fill={fill.value}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  },
});
