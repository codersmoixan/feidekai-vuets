import { defineComponent, reactive, ref } from "vue";
import Buttons from "@/components/Buttons";
import FormText from "@/components/FormFields/FormText";
import makeStyles from "vue3-makestyles";
import { useRouter } from "vue-router";
import routes from "@/router/routes";
import ImageLogo from "@/images/logo.png";
import Hidden from "@/components/Hidden";
import useMediaQuery from "@/hooks/useMediaQuery";
import Typography from "@/components/Typography/Typography";
import type { ObjectType } from "@/utils/theme/utils/types";
import Greeter from "vue3-makestyles";

const useStyles = makeStyles((theme, props) => {
  console.log(theme, props, "这个参数是什么");

  return {
    container: {
      padding: theme.spacing(2),
      backgroundColor: props?.backgroundColor,
    },
    mdUpContainer: {
      width: "300px",
      height: "300px",
      backgroundColor: "red",
    },
  };
});

export default defineComponent({
  name: "HomePage",
  setup() {
    const history = useRouter();
    const mdDown = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const bold = ref(400);
    const background = ref("yellow");
    const buttonsText = reactive<ObjectType>({});

    // const hello = vue3MakeStyles.Greeter("666");
    console.log(makeStyles, "这个是什么");

    setTimeout(() => {
      bold.value = 700;
      background.value = "blue";
    }, 1000);

    const classes = useStyles(
      reactive({
        backgroundColor: background,
        bold: bold,
      })
    );

    const show = ref(true);

    const formValue = reactive({
      name: "123",
    });

    const handleClick = () => {
      show.value = !show.value;
      console.log(formValue, "这个是什么");
      buttonsText.primary = "这是修改后的啊";
    };

    return () => (
      <div class={classes.container}>
        <div class={classes.buttons}>
          <div class={classes.primaryButton}>
            <Buttons type="primary" fullWidth onClick={handleClick}>
              {buttonsText?.primary ?? "primary"}
            </Buttons>
          </div>
          <Buttons type="primary" onClick={() => history.push(routes.account)}>
            Primary
          </Buttons>
          <Buttons type="text" bold="700">
            Text
          </Buttons>
          <Buttons type="outline" variant="ca">
            Outline
          </Buttons>
        </div>
        <div>
          <br />
          {show.value && (
            <FormText placeholder="请输入你的名字" vModel={formValue.name}>
              {{
                suffix: () => (
                  <Typography variant="h4" bold={bold.value}>
                    发送验证码
                  </Typography>
                ),
              }}
            </FormText>
          )}
          <br />
          {mdDown.value && <img src={ImageLogo} />}
          <FormText placeholder="这是另一个" />
          <Hidden mdDown>
            <div class={classes.mdUpContainer}>大屏</div>
          </Hidden>
        </div>
      </div>
    );
  },
});
