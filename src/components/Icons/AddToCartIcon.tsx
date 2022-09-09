import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "AddToCartIcon",
  props: formatIconProps(),
  setup(props) {
    const { width, height, fill } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g
            id="2.Icons/16/16-add-to-cart"
            fill="none"
            fill-rule="evenodd"
            stroke="none"
            stroke-width="1"
          >
            <path
              id="Combined-Shape"
              d="M4.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM3.264 0c.284 0 .524.24.561.561l.312 2.674h5.92l.005.19c.086 1.698 1.319 3.046 2.826 3.046.395 0 .77-.094 1.112-.261l-1.136 4.329c-.072.273-.293.461-.542.461H4.396c-.283 0-.523-.24-.56-.562L2.768 1.294H1V0zm10.403 1v1.333H15v1.334h-1.333V5h-1.334V3.667H11V2.333h1.333V1h1.334z"
              fill={fill.value}
            />
          </g>
        </g>
      </svg>
    );
  },
});
