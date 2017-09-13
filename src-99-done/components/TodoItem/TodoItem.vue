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
      <div class="text">
        <!-- <input class="toggle" type="checkbox" v-model="todo.completed"> -->
        <Label
          :completed="todo.completed"
          v-show="editedTodo == undefined || todo.id != editedTodo.id"
          @dblclick="$emit(`editTodo`, todo)"
        >
          {{ todo.title }}
        </Label>
        <TextField class="edit"
          type="edit"
          v-show="editedTodo && todo.id == editedTodo.id"
          v-todo-focus="todo == editedTodo"
          :value="todo.title"
          @input="(value) => { todo.title = value }"
          @blur="$emit(`doneEdit`, todo)"
          @enter="$emit(`doneEdit`, todo)"
          @esc="$emit(`cancelEdit`, todo)"
        />
      </div>
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
import Button from '../Button/Button.vue'
import Label from '../Label/Label.vue'
import TextField from '../TextField/TextField.vue'
import Checkbox from '../Checkbox/Checkbox.vue'

export default {
  name: 'TodoItem',
  props: ['todo', 'editedTodo'],
  components: { TextField, Checkbox, Button, Label },
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
  }
  .view {
    padding: 10px 0;
    min-height: 38px;
    align-items: center;
    display: flex;
  }
  .text {
    flex-grow: 1;
  }
  .toggle {
    margin-right: 18px;
  }
</style>

