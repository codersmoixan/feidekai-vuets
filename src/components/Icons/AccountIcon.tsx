import { defineComponent, toRefs } from "vue";
import formatIconProps from "@/components/Icons/formatIconProps";

export default defineComponent({
  name: "AccountIcon",
  props: formatIconProps(),
  setup(props) {
    const { width, height, fill, viewBox, ...other } = toRefs(props);

    return () => (
      <svg
        height={height.value}
        width={width.value}
        viewBox={viewBox.value}
        xmlns="http://www.w3.org/2000/svg"
        {...other}
      >
        <g>
          <g
            id="---Icons-(Dont'-Check)"
            fill="none"
            fill-rule="evenodd"
            stroke="none"
            stroke-width="1"
          >
            <g id="2.Icons/24/24-account" fill={fill.value ?? "currentColor"}>
              <path
                id="Shape"
                d="M20.25 3H3.75a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75zM8.5 9.111C8.5 7.393 10.067 6 12 6s3.5 1.393 3.5 3.111v.778C15.5 11.607 13.933 13 12 13s-3.5-1.393-3.5-3.111V9.11zm8.857 9.639H6.643c-.493 0-.893-.336-.893-.75 0-2.07 2-3.75 4.464-3.75h3.572c2.465 0 4.464 1.68 4.464 3.75 0 .414-.4.75-.893.75z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
