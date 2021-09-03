<template>
  <TodoForm @add-todo="addTodo" />
  <List 
    title="To-do" 
    :items="todoItems" 
  />
  <List 
    title="Done" 
    :items="doneItems" 
  />
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
