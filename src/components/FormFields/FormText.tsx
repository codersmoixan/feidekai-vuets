import { computed, defineComponent, ref, toRefs, watch } from "vue";
import { Input } from "@arco-design/web-vue";
import makeStyles from "vue3-makestyles";
import clsx from "clsx";
import isUndefined from "lodash/isUndefined";
import { isNull } from "@/utils/helper";

const useStyles = makeStyles((theme) => ({
  _root: {
    position: "relative",
  },
  inputRoot: {
    height: "56px",
    borderRadius: "8px",
    backgroundColor: theme.palette?.primary?.peach,
    "&.arco-input-focus": {
      borderColor: theme.palette?.primary?.darkPeach,
    },
    "&:focus-within": {
      borderColor: theme.palette?.primary?.darkPeach,
      "~.cover": {
        top: "18px",
        fontSize: "12px",
      },
      "& .arco-input": {
        opacity: 1,
      },
    },
    "& .arco-input": {
      position: "relative",
      opacity: 0,
      zIndex: 2,
      transform: "translateY(8px)",
    },
    "&:hover": {
      backgroundColor: theme.palette?.primary?.white,
      borderColor: theme.palette?.primary?.darkPeach,
    },
  },
  focus: {
    "~.cover": {
      top: "18px",
      fontSize: "12px",
    },
    "& .arco-input": {
      opacity: 1,
    },
  },
  blur: {
    "& .arco-input": {
      opacity: 0,
    },
    "~.cover": {
      top: "50%",
    },
  },
  cover: {
    width: "auto",
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    paddingLeft: theme.spacing(1.5),
    color: theme.palette?.primary?.secondary,
    zIndex: 1,
    transition: theme.mixins?.transition,
  },
}));

const InputEvent = (value?: string, ev?: Event) => null;

export default defineComponent({
  name: "FormText",
  props: {
    defaultValue: String,
    placeholder: String,
    modelValue: String,
  },
  emits: {
    "update:modelValue": (value: string) => true,
    change: InputEvent,
    input: InputEvent,
    blur: InputEvent,
    focus: InputEvent,
  },
  setup(props, { emit, attrs, slots }) {
    const { defaultValue, placeholder, modelValue } = toRefs(props);
    const classes = useStyles();

    const _value = ref(defaultValue);
    const isFocus = ref(false);

    const computedValue = computed(() => props.modelValue ?? _value.value);
    isFocus.value = Boolean(computedValue.value);

    watch(modelValue, (val) => {
      if (isUndefined(val) || isNull(val)) {
        _value.value = val;
      }
    });

    const updateValue = (value: string) => {
      _value.value = value;

      emit("update:modelValue", value);
    };

    const handleFocus = (ev: Event) => {
      isFocus.value = true;

      emit("focus", computedValue.value, ev);
    };

    const handleBlur = (ev: Event) => {
      if (!computedValue.value) {
        isFocus.value = false;
      }

      emit("blur", computedValue.value, ev);
    };

    const handleInput = (value: string, ev: Event) => {
      updateValue(value);

      emit("input", value, ev);
    };

    return () => (
      <div class={classes._root}>
        <Input
          class={clsx(
            classes.inputRoot,
            isFocus.value ? classes.focus : classes.blur
          )}
          placeholder={placeholder.value}
          defaultValue={computedValue.value}
          onChange={(value, ev) => emit("input", value, ev)}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          v-slots={slots}
          {...attrs}
        />
        <span class={clsx(classes.cover, "cover")}>{placeholder.value}</span>
      </div>
    );
  },
});
