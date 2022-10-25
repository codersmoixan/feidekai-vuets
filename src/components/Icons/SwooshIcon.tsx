import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "SwooshIcon",
  props: {
    tFill: {
      type: String,
      default: "#CD0039",
    },
    bFill: {
      type: String,
      default: "currentColor",
    },
  },
  setup(props) {
    const { bFill, tFill } = toRefs(props);

    return () => (
      <svg
        viewBox="0 0 375 43"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="---1.-Home"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Home-2---Native-MP-Page" fill={tFill.value}>
            <g id="Group">
              <path
                d="M375,3.51480675 C375,3.51480675 331.999151,0 300.670395,0 C143.261885,0 0,35.1324538 0,35.1324538 C0,37.0243081 0,41.8549988 0,43 C7.58486587,41.3484225 130.401948,17.0110748 253.042154,17.0110748 C318.376219,16.6467562 375,23.1992859 375,23.1992859 C375,19.072077 375,7.34448882 375,3.51480675"
                id="Fill-5"
              />
            </g>
          </g>
          <g fill={bFill.value}>
            <g id="Group">
              <path
                d="M375,23.1992859 L375,43 L0,43 C0,37.0243081 0,41.8549988 0,43 C7.58486587,41.3484225 130.401948,17.0110748 253.042154,17.0110748 C318.376219,16.6467562 375,23.1992859 375,23.1992859"
                id="Fill-5"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
