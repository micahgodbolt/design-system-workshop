<template>
   <input class="new-todo"
    autofocus 
    autocomplete="off"
    placeholder="What needs to be done?"
    v-model="newTodo"
    @keyup.enter="keyupEnter">
</template>

<script>
export default {
  name: 'TextField',
  props: ['model'],
  data: function () {
    return {
      newTodo: ''
    }
  },
  methods: {
    keyupEnter: function (newTodo) {
      this.$emit('keyupEnter', newTodo)
    }
  }
}
</script>

<style>

</style>
