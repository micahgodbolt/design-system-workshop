<template>
  <div class="TodoItem"
    :class="{ completed: todo.completed, editing: todo == editedTodo }"
    >
    <div class="view"
      v-show="todo != editedTodo"
    >
     <Checkbox class="toggle"
        type="toggleItem"
        :value="todo.completed"
        @change="(value) => { todo.completed = value }"
      />
      <!-- <input class="toggle" type="checkbox" v-model="todo.completed"> -->
      <label class="label" @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <Button type="destroy" class="destroy" @click="removeTodo(todo)">×</Button>
    </div>
    <Textfield class="edit"
      type="edit"
      v-show="todo == editedTodo"
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
import Button from '../../inputs/Button/Button'
import Textfield from '../../inputs/Textfield/Textfield'
import Checkbox from '../../inputs/Checkbox/Checkbox'

export default {
  name: 'TodoItem',
  props: ['todo', 'editedTodo'],
  components: { Textfield, Checkbox, Button },
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

<style lang="scss" scoped>
  .TodoItem {
    position: relative;
    font-size: 24px;
  }
  .view {
    display: flex;
  }
  .toggle {
    display: flex;
    align-items: center;
    flex-basis: 40px;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
    &:after {
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    }
    &:checked:after {
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }
  }
  .label {
    word-break: break-all;
    padding: 15px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    flex-grow: 1;
    .completed & {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
  .editing {
    border-bottom: none;
    padding: 0;
  }
</style>

