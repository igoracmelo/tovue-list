export default {
  props: {
    item: {
      id: Number,
      text: String,
      done: Boolean,
    },
  },
  data() {
    return {
      style: {
        hover: false
      }
    }
  }
}