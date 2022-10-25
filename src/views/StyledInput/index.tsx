import { defineComponent, toRefs } from "vue";
import styled from "vue3-styled-components";
import { Input } from "@arco-design/web-vue";
// import { styled } from "vue3-makestyles";

const FormText = styled.div`
  & .arco-input-wrapper {
    background-color: #4caf50;
  }
  &:focus-within {
    & .arco-input-wrapper {
      background-color: black;
    }
  }
`;

// const FormText = styled("div")({
//   "& .arco-input-wrapper": {
//     backgroundColor: "#4caf50",
//     display: "flex",
//   },
//   "&:focus-within": {
//     "& .arco-input-wrapper": {
//       backgroundColor: "red",
//       display: "flex",
//     },
//   },
// });

export default defineComponent({
  name: "Index",
  setup(props) {
    const {} = toRefs(props);

    return () => (
      <FormText>
        <Input />
      </FormText>
    );
  },
});
