<template>
  <ul class="todo-list">
    <li v-for="todo in data"
      class="todo"
      :key="todo.id"
      :class="{ completed: todo.completed, editing: todo == editedTodo }">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
        <button class="destroy" @click="removeTodo(todo)"></button>
      </div>
      <input class="edit" type="text"
        v-model="todo.title"
        v-todo-focus="todo == editedTodo"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)">
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      newTodo: ''
    }
  },
  props: ['data', 'editedTodo'],
  methods: {
    removeTodo: function (todo) {
      this.$emit('removeTodo', todo)
    },

    editTodo: function (todo) {
      this.$emit('editTodo', todo)
    },
    doneEdit: function (todo) {
      this.$emit('doneEdit', todo)
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>
