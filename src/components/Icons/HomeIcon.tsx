import { defineComponent, toRefs } from "vue";
import formatIconProps from "./formatIconProps";

export default defineComponent({
  name: "HomeIcon",
  props: formatIconProps(),
  setup(props) {
    const { height, width, fill } = toRefs(props);

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
            <g id="2.Icons/24/24-home" fill={fill.value ?? "currentColor"}>
              <path
                id="Path"
                d="M20.693 9.432l-8.182-6.26a.847.847 0 0 0-1.022 0l-8.182 6.26a.77.77 0 0 0-.307.612v10.173c0 .433.366.783.818.783h5.727v-6.26h4.91V21h5.727c.452 0 .818-.35.818-.783V10.044a.77.77 0 0 0-.307-.612z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
