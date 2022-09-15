export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    return () => <div>{props.message}</div>;
  },
});
