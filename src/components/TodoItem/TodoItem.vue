<template>
  <div class="todo-item">
    <input 
      type="checkbox" 
      class="todo-done focus-outline" 
      v-model="done" 
      @change="onCheck($event)"
    >
    <input type="text" class="todo-text" :value="todo">
    <button 
      class="todo-delete focus-outline"
      @click="onDelete($event)">X</button>
  </div>
</template>

<script>
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
      setTimeout(() => currentTodo.remove(), 500)
    }
  }
}
</script>

<style scoped lang="scss">
  @import './TodoItem.scss';
</style>
