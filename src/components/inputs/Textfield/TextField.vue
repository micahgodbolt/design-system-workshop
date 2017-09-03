<template>
  <input class="new-todo"
    autofocus
    autocomplete="off"
    placeholder="What needs to be done?"
    v-on:change="$emit(`input`, $event.target.value)"
    @keyup.enter="$emit(`enter`)"
  >
</template>

<script>
export default {
  name: 'TextField'
}
</script>

<style>

</style>
