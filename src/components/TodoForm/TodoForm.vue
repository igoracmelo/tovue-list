<template>
  <form class="form" @submit.prevent="handleSubmit">
    <input type="text" class="todo-text" v-model="todo.text">
    <button type="submit" class="todo-add">Add</button>
  </form>
</template>



<script>
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

      this.$parent.$emit('addTodo', this.todo)
      console.log(this.todo)

      this.todo.text = ""
      this.todo.id = -1
    },

    newId() {
      return parseInt(Math.random() * 10000000000)
    }
  }
}
</script>

<style scoped lang="scss">
  @import './TodoForm.scss'
</style>