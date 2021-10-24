<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <p 
      class="placeholder"
      v-if="!items.length && onEmptyMsg"
    >
      {{ onEmptyMsg }}
    </p>
    <div class="items">
      <TodoItem 
        v-for="item in items" 
        :key="item.id" 
        :item="item"
      />
    </div>
  </div>
</template>

<script src="./List.js"></script>
<style scoped lang="scss" src="./List.scss"></style>