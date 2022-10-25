import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "CatalogIcon",
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
            stro-keWidth="1"
          >
            <g id="2.Icons/24/24-catalog" fill={fill.value ?? "currentColor"}>
              <path
                id="Combined-Shape"
                d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4zM9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4zm6.964-10.072c.573-.57 1.499-.57 2.072 0l3.036 3.035a1.47 1.47 0 0 1 0 2.074l-3.036 3.035c-.573.57-1.5.57-2.072 0l-3.036-3.036a1.47 1.47 0 0 1 0-2.073zM9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
