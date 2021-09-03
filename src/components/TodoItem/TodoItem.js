export default {
  props: {
    todo: String,
  },

  data() {
    return {
      done: false
    }
  },

  methods: {
    onCheck(e) {
      let currentTodo = e.target.parentNode
      if (this.done)
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