import { storiesOf } from '@storybook/vue'

import TodoItem from './TodoItem.vue'

storiesOf('TodoItem', module)
  .add('Display', () => ({
    components: { TodoItem },
    template: `<TodoItem :todo="{completed:false, id:0, title:'abc'}"></TodoItem>`
  }))
  .add('Display Checked', () => ({
    components: { TodoItem },
    template: `<TodoItem :todo="{completed:true, id:0, title:'abc'}"></TodoItem>`
  }))
  .add('Edit', () => ({
    components: { TodoItem },
    template: `<TodoItem :todo="{completed:false, id:0, title:'abc'}"
     :editedTodo="{completed:false, id:0, title:'abc'}" ></TodoItem>`
  }))
