import TodoForm from '../TodoForm/TodoForm.vue'
import List from '../List/List.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    List,
  },

  data() {
    return {
      items: [
        { id: 1, text: "i need to do this", done: false },
        { id: 2, text: "and this", done: false },
        { id: 10, text: "this is DONE", done: true },
      ]
    }
  },

  computed: {
    todoItems() {
      return this.items.filter((i) => !i.done)
    },

    doneItems() {
      return this.items.filter((i) => i.done)
    }
  },

  methods: {
    addTodo(todo) {
      this.items.push(todo)
    },
  },
}