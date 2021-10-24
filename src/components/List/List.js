import TodoItem from '../TodoItem/TodoItem.vue'

export default {
  components: {
    TodoItem,
  },

  props: {
    title: String,
    items: Array,
    onEmptyMsg: String
  },
}
