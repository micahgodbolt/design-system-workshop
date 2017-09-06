import { storiesOf } from '@storybook/vue'

import TextField from './TextField.vue'

storiesOf('TextField', module)
  .add('New TextField with placeholder', () => ({
    components: { TextField },
    template: '<TextField placeholder="Put text in here" type="new"></TextField>'
  }))
  .add('New TextField with text', () => ({
    components: { TextField },
    template: '<TextField value="Text has been put here" type="new"></TextField>'
  }))
  .add('Edit TextField with text', () => ({
    components: { TextField },
    template: '<TextField value="Text has been put here" type="edit"></TextField>'
  }))
