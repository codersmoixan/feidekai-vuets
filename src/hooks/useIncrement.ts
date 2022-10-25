import { ref } from "vue";

const useIncrement = () => {
  const count = ref<number>(0);

  const increment = () => count.value++;

  return {
    count,
    increment,
  };
};

export default useIncrement;
