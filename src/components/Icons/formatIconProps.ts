const formatIconProps = (props: string[] = ["fill", "width", "height"]) => ({
  fill: {
    type: String,
    default: "#CD0039",
  },
  width: {
    type: [String, Number],
    default: 24,
  },
  height: {
    type: [String, Number],
    default: 24,
  },
  viewBox: {
    type: String,
  },
});

export default formatIconProps;
