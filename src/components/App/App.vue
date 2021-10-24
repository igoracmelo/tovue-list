<template>
  <div class="app-container">
    <ThemeSelector />
    <TodoForm @add-todo="addTodo" />
    <List 
      title="To-do" 
      :items="todoItems" 
      onEmptyMsg="You don't have any tasks to do. 
      Add some, or maybe just enjoy your life free of obligations 😎"
    />
    <List 
      title="Done" 
      :items="doneItems" 
      onEmptyMsg="When you finish a task and check the box, it will appear here 😁"
    />
  </div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
