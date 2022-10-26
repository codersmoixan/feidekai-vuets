import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "AngleLeftIcon",
  props: {
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  setup(props) {
    const { height, width, fill } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M9.403 12.62L5.329 8.345a.5.5 0 0 1 0-.69L9.403 3.38a.5.5 0 0 1 .724 0l.544.571a.5.5 0 0 1 0 .69L7.8 7.655a.5.5 0 0 0 0 .69l2.872 3.014a.5.5 0 0 1 0 .69l-.544.571a.5.5 0 0 1-.724 0z"
            fill={fill.value}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  },
});
