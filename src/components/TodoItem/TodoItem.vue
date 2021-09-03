<template>
  <div class="todo-item">
    <input 
      type="checkbox" 
      class="todo-done focus-outline"
      v-model="item.done" 
      @change="onCheck($event)"
    >
    <input 
      type="text" 
      class="todo-text" 
      :value="item.text" 
      @focus="onFocus" 
      @blur="onBlur"
    >
    <button 
      class="todo-delete focus-outline"
      @click="onDelete($event)">X</button>
  </div>
</template>

<script src="./TodoItem.js"></script>
<style scoped lang="scss" src="./TodoItem.scss"></style>
