<template>
  <div 
    class="todo-item"
    :class="{
      done: item.done, 
      hover: style.hover 
    }"
  >
    <input 
      type="checkbox" 
      class="todo-done focus-outline"
      v-model="item.done" 
      tabindex="-1"
    >
    <input 
      type="text" 
      class="todo-text" 
      v-model="item.text" 
      @focus="style.hover = true" 
      @blur="style.hover = false"
      tabindex="1"
    >
    <button 
      class="todo-delete focus-outline"
      tabindex="-1"
      @click="item.deleted = true"
    >X</button>
  </div>
</template>

<script src="./TodoItem.js"></script>
<style scoped lang="scss" src="./TodoItem.scss"></style>
