import { onMounted, ref } from "vue";
import Typography from "@/components/Typography/Typography";
import { useTheme } from "vue3-makestyles";

export default function Test() {
  const theme = useTheme();

  const count = ref(0);
  let value = 0;

  console.log(theme, 34555);

  onMounted(() => {
    console.log("这里执行了吗", theme);
  });

  const handleClick = () => {
    value++;
    console.log("click", theme);
  };

  return (
    <div>
      <Typography variant="h1">{value}</Typography>
      <button onClick={handleClick}>增加</button>
    </div>
  );
}
