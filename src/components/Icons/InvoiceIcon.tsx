import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "InvoiceIcon",
  props: formatIconProps(),
  setup(props) {
    const { width, fill, height } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        view-box="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={fill.value}>
          <g
            id="---Icons-(Dont'-Check)"
            fill="none"
            fill-rule="evenodd"
            stroke="none"
            stroke-width="1"
          >
            <g id="2.Icons/24/24-fapiao" fill={fill.value}>
              <path
                id="Shape"
                d="M19.2 3H4.8c-.442 0-.8.335-.8.75V21l3.2-2.25L9.6 21l2.4-2.25L14.4 21l2.4-2.25L20 21V3.75c0-.415-.358-.75-.8-.75zM13 15H7v-2h6v2zm0-3H7v-2h6v2zm0-3H7V7h6v2zm4 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V7h2v2z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
