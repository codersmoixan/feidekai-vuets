import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "BlogIcon",
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
            <g id="2.Icons/24/24-blog" fill={fill.value ?? "currentColor"}>
              <path
                id="Shape"
                d="M19.26 3H7.436a.745.745 0 0 0-.74.75v14.625c0 .621-.496 1.125-1.108 1.125a1.117 1.117 0 0 1-1.109-1.125V13.5h1.479V12H3.739a.745.745 0 0 0-.739.75v5.625C3 19.825 4.158 21 5.587 21h12.196c1.222-.006 2.21-1.01 2.217-2.25v-15c0-.414-.33-.75-.74-.75zm-2.586 14.25h-6.652a.372.372 0 0 1-.37-.375v-.75c0-.207.166-.375.37-.375h6.652c.204 0 .37.168.37.375v.75a.372.372 0 0 1-.37.375zm0-3.75h-6.652a.372.372 0 0 1-.37-.375v-.75c0-.207.166-.375.37-.375h6.652c.204 0 .37.168.37.375v.75a.372.372 0 0 1-.37.375zm0-3.75h-6.652a.372.372 0 0 1-.37-.375v-3c0-.207.166-.375.37-.375h6.652c.204 0 .37.168.37.375v3a.372.372 0 0 1-.37.375z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
