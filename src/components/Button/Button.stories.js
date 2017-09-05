import { storiesOf } from '@storybook/vue'

import Button from './Button.vue'

storiesOf('Button', module)
  .add('Filter', () => ({
    components: { Button },
    template: '<Button type="filter">completed</Button>'
  }))
  .add('Clear', () => ({
    components: { Button },
    template: '<Button type="clear">clear</Button>'
  }))
  .add('Destroy', () => ({
    components: { Button },
    template: '<Button type="destroy">×</Button>'
  }))
