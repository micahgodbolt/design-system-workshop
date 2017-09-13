import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TextField from './TextField.vue'

storiesOf('TextField', module)
  .add('New TextField with placeholder', () => ({
    components: { TextField },
    template: '<TextField @input="input" @enter="enter" @esc="esc" @blur="blur" placeholder="Put text in here" type="new"></TextField>',
    methods: { input: action('change'), enter: action('enter'), esc: action('esc'), blur: action('blur') }
  }))
  .add('New TextField with text', () => ({
    components: { TextField },
    template: '<TextField value="Text has been put here" type="new"></TextField>'
  }))
  .add('Edit TextField with text', () => ({
    components: { TextField },
    template: '<TextField value="Text has been put here" type="edit"></TextField>'
  }))
