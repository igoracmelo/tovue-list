import TodoForm from '../TodoForm/TodoForm.vue'
import ThemeSelector from '../ThemeSelector/ThemeSelector.vue'
import List from '../List/List.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    List,
    ThemeSelector
  },

  data() {
    return {
      items: []
    }
  },

  computed: {
    allItems() {
      return this.items.filter((i) => !i.deleted)
    },

    todoItems() {
      return this.allItems.filter((i) => !i.done && !i.deleted)
    },

    doneItems() {
      return this.allItems.filter((i) => i.done && !i.deleted)
    }
  },

  methods: {
    addTodo(todo) {
      this.items.push(todo)
    },
  },

  mounted() {
    let itemsString = localStorage.getItem('items')
    if (itemsString)
      this.items = JSON.parse(itemsString)
  },

  watch: {
    allItems: {
      handler() {
        localStorage.setItem('items', JSON.stringify(this.allItems))
      },
      deep: true,
    }
  }
}