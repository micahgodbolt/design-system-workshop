import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Button from './Button.vue'

storiesOf('Button', module)
  .add('Filter', () => ({
    components: { Button },
    template: `<Button @click="action('clicked')" type="filter">completed</Button>`
  }))
  .add('Clear', () => ({
    components: { Button },
    template: '<Button type="clear">clear</Button>'
  }))
  .add('Destroy', () => ({
    components: { Button },
    template: '<Button type="destroy">×</Button>'
  }))
