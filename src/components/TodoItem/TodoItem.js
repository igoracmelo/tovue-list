export default {
  props: {
    item: {
      id: Number,
      text: String,
      done: Boolean,
    },
  },

  methods: {
    onCheck(e) {
      let currentTodo = e.target.parentNode
      if (this.item.done)
        currentTodo.classList.add("done")
      else
        currentTodo.classList.remove("done")
    },
    
    onDelete(e) {
      let currentTodo = e.target.parentNode
      currentTodo.classList.add("deleted")
      setTimeout(() => currentTodo.remove(), 300)
    },
    
    onFocus(e) {
      let currentTodo = e.target.parentNode
      currentTodo.classList.add("hover")
    },
    
    onBlur(e) {
      let currentTodo = e.target.parentNode
      currentTodo.classList.remove("hover")
    }
  }
}