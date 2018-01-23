<template>
  <span class="todo-count">
    <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
  </span>
</template>

<script>
export default {
  name: 'TodoCount',
  props: ['remaining'],
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  }
}
</script>

<style>
</style>
