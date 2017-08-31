<template>
  <ul class="todo-list">
    <li v-for="todo in data"
      class="todo"
      :key="todo.id">

      <slot name="todo"
        :todo="todo"
      >
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>

</style>
