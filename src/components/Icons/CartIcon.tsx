import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "CartIcon",
  props: formatIconProps(),
  setup(props) {
    const { width, height, fill } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g
            id="---Icons-(Dont'-Check)"
            fill="none"
            fill-rule="evenodd"
            stroke="none"
            stroke-width="1"
          >
            <g
              id="2.Icons/24/24-shopping-cart"
              fill={fill.value ?? "currentColor"}
            >
              <path
                id="Combined-Shape"
                d="M7 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 3c.376 0 .694.284.743.664l.413 3.16H20.25c.237 0 .46.113.601.308a.776.776 0 0 1 .117.676l-2.25 7.647A.753.753 0 0 1 18 16H7.5a.755.755 0 0 1-.743-.664L5.344 4.53H3V3h3z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
