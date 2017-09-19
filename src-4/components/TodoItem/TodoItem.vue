<template>
  <div :class="{ completed: todo.completed, editing: todo == editedTodo }">
    <div class="view">
     <Checkbox class="toggle"
        :value="todo.completed"
        @change="(value) => { todo.completed = value }"
      />
      <div class="text">
        <Label
          :completed="todo.completed"
          v-show="editedTodo == undefined || todo.id != editedTodo.id"
          @dblclick="$emit(`editTodo`, todo)"
        >
          {{ todo.title }}
        </Label>
        <Textfield class="edit"
          v-show="editedTodo && todo.id == editedTodo.id"
          v-todo-focus="todo == editedTodo"
          :value="todo.title"
          @input="(value) => { todo.title = value }"
          @blur="$emit(`doneEdit`, todo)"
          @enter="$emit(`doneEdit`, todo)"
          @esc="$emit(`cancelEdit`, todo)"
        />
      </div>
      <Button class="destroy" @click="$emit(`removeTodo`, todo)"></Button>
    </div>
  </div>
</template>

<script>
import Button from '../Button/Button.vue'
import Label from '../Label/Label.vue'
import Textfield from '../Textfield/Textfield.vue'
import Checkbox from '../Checkbox/Checkbox.vue'

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

<style>

</style>

