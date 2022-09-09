import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "AutoShipIcon",
  props: formatIconProps(),
  setup(props) {
    const { width, height, fill } = toRefs(props);

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
            <g id="2.Icons/24/24-autoship" fill={fill.value}>
              <path
                id="Combined-Shape"
                d="M16.5 7c.344 0 .643.243.727.59l.666 2.763 2.692 1.395a.782.782 0 0 1 .415.696v4.667c0 .43-.335.778-.75.778h-2.288C17.772 19.634 16.358 21 14.625 21c-1.732 0-3.148-1.366-3.337-3.111H3.75A.764.764 0 0 1 3 17.11v-6.005c1.1 1.295 2.705 2.116 4.5 2.116 3.313 0 6-2.786 6-6.222zm-1.875 8.556c-1.034 0-1.875.871-1.875 1.944s.84 1.944 1.875 1.944c1.034 0 1.875-.871 1.875-1.944s-.84-1.944-1.875-1.944zM7.5 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm.75 1.5h-1.5v3.75h3.75v-1.5H8.25V4.5z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
