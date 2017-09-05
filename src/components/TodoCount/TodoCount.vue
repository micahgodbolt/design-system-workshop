<template>
  <span class="TodoCount todo-count">
    <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
  </span>
</template>

<script>
export default {
  props: ['remaining'],
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  }
}
</script>

<style>
  .TodoCount {
    color: #777;
    font-weight: 300;
  }
</style>
