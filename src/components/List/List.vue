<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div class="items">
      <TodoItem 
        v-for="item in items" 
        :key="item.id" 
        :todo="item.text"
      />
    </div>
  </div>
</template>

<script src="./List.js"></script>
<style scoped lang="scss" src="./List.scss"></style>