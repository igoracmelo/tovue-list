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
			currentTodo.classList.toggle("done")
    },
    
    onDelete(e) {
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