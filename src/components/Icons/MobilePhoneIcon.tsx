import { defineComponent, toRefs } from "vue";
import formatIconProps from "./formatIconProps";

export default defineComponent({
  name: "MobilePhoneIcon",
  props: formatIconProps(),
  setup(props) {
    const { fill, width, height } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={fill.value}>
          <path
            d="M8.4 1c.884 0 1.6.746 1.6 1.667v6.666C10 10.253 9.284 11 8.4 11H3.6C2.716 11 2 10.254 2 9.333V2.667C2 1.747 2.716 1 3.6 1zm0 1.667H3.6v6.666h4.8V2.667zM7.5 8v1h-3V8h3z"
            fill={fill.value}
          />
        </g>
      </svg>
    );
  },
});
