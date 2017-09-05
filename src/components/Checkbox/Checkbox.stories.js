import { storiesOf } from '@storybook/vue'

import Checkbox from './Checkbox.vue'

storiesOf('Checkbox', module)
  .add('Filter', () => ({
    components: { Checkbox },
    template: '<Checkbox type="toggleAll">completed</Checkbox>'
  }))
