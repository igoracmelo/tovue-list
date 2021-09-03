<template>
  <form class="form" @submit.prevent="handleSubmit">
    <input type="text" class="todo-text" v-model="todo.text">
    <button type="submit" class="todo-add">Add</button>
  </form>
</template>


<script src="./TodoForm.js"></script>
<style scoped lang="scss" src="./TodoForm.scss"></style>