const onCheck = (e) => {
  let currentTodo = e.target.parentNode
  if (this.done)
    currentTodo.classList.add("done")
  else
    currentTodo.classList.remove("done")
}

const onDelete = (e) => {
  let currentTodo = e.target.parentNode
  currentTodo.classList.add("deleted")
  setTimeout(() => currentTodo.remove(), 500)
}

const onFocus = (e) => {
  let currentTodo = e.target.parentNode
  currentTodo.classList.add("hover")

}

const onBlur = (e) => {
  let currentTodo = e.target.parentNode
  currentTodo.classList.remove("hover")
}

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
    onCheck,
    onDelete,
    onFocus,
    onBlur
  }
}