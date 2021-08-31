<template>
  <TodoContainer />
</template>

<script>
import TodoContainer from '../TodoContainer/TodoContainer.vue'

export default {
  name: 'App',
  components: {
    TodoContainer
  },
}
</script>

<style lang="scss">
  @import './App.scss';
</style>
