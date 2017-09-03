<template>
  <div :class="{ completed: todo.completed, editing: todo == editedTodo }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <Textfield class="edit"
      v-todo-focus="todo == editedTodo"
      :value="todo.title"
      @input="(value) => { todo.title = value }"
      @blur="doneEdit(todo)"
      @enter="doneEdit(todo)"
      @esc="cancelEdit(todo)"
     />
    <!-- <input class="edit" type="text"
      v-model="todo.title"
      v-todo-focus="todo == editedTodo"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)"> -->
  </div>
</template>

<script>

import Textfield from '../../inputs/Textfield/Textfield'

export default {
  name: 'TodoItem',
  props: ['todo', 'editedTodo'],
  components: { Textfield },
  methods: {
    removeTodo: function (todo) {
      this.$emit('removeTodo', todo)
    },
    editTodo: function (todo) {
      this.$emit('editTodo', todo)
    },
    doneEdit: function (todo) {
      this.$emit('doneEdit', todo)
    },
    cancelEdit: function (todo) {
      this.$emit('cancelEdit', todo)
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
