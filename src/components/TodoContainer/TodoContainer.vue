<template>
  <div class="todo-container" @newTodo="addTodo(todo)">
    <TodoForm @add-todo="addTodo" />
    <div class="todos">
      <TodoItem 
        v-for="item in todoItems" 
        :key="item.id" 
        :todo="item.text"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from '../TodoItem/TodoItem.vue'
import TodoForm from '../TodoForm/TodoForm.vue'

export default {
  components: {
    TodoItem,
    TodoForm,
  },

  data() {
    return {
      todoItems: [
        { id: 1, text: "i need to do this" },
        { id: 2, text: "and this" },
        { id: 3, text: "and also this" },
        { id: 4, text: "unfortunately also this" },
      ]
    }
  },

  methods: {
    addTodo(todo) {
      this.todoItems.push(todo)
      console.log(todo)
    }
  }
}
</script>

<style lang="scss">
  @import './TodoContainer.scss';
</style>
