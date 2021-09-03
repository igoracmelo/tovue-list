export default {
  data() {
    return {
      todo: {},
    }
  },
  
  methods: {
    handleSubmit() {
      if (this.todo.text.match(/^\s*$/)) 
        return
      
      this.todo.id = this.newId()
      this.todo.done = false

      const todo = { ...this.todo }
      console.log(todo)
      this.$emit('addTodo', todo)

      this.todo.text = ""
      this.todo.id = -1
    },

    newId() {
      return parseInt(Math.random() * 10000000000)
    }
  }
}