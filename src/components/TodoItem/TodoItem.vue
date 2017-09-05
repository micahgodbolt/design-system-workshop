<template>
  <div class="TodoItem"
    :class="{ completed: todo.completed, editing: todo == editedTodo }"
    >
    <div class="view">
     <Checkbox class="toggle"
        type="toggleItem"
        :value="todo.completed"
        @change="(value) => { todo.completed = value }"
      />
      <!-- <input class="toggle" type="checkbox" v-model="todo.completed"> -->
      <Label
        :completed="todo.completed"
        v-show="todo != editedTodo"
        @dblclick="$emit(`editTodo`, todo)"
      >
        {{ todo.title }}
      </Label>
      <Textfield class="edit"
        type="edit"
        v-show="todo == editedTodo"
        v-todo-focus="todo == editedTodo"
        :value="todo.title"
        @input="(value) => { todo.title = value }"
        @blur="$emit(`doneEdit`, todo)"
        @enter="$emit(`doneEdit`, todo)"
        @esc="$emit(`cancelEdit`, todo)"
      />
      <Button type="destroy" class="destroy" @click="$emit(`removeTodo`, todo)">×</Button>
    </div>
    <!-- <input class="edit" type="text"
      v-model="todo.title"
      v-todo-focus="todo == editedTodo"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)"> -->
  </div>
</template>

<script>
import Button from '../Button/Button'
import Label from '../Label/Label'
import Textfield from '../Textfield/Textfield'
import Checkbox from '../Checkbox/Checkbox'

export default {
  name: 'TodoItem',
  props: ['todo', 'editedTodo'],
  components: { Textfield, Checkbox, Button, Label },
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
    padding: 10px 0;
    min-height: 38px;
    align-items: center;
    display: flex;
  }
  .toggle {
    margin-right: 18px;
  }
</style>

