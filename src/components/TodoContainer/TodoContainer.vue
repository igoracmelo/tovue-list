<template>
  <div class="todo-container">
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

<script src="./TodoContainer.js"></script>
<style lang="scss" src="./TodoContainer.scss"></style>