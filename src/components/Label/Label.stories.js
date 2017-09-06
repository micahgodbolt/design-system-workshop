import { storiesOf } from '@storybook/vue'

import Label from './Label.vue'

storiesOf('Label', module)
  .add('Label', () => ({
    components: { Label },
    template: '<Label completed="false" >I should do stuff</Label>'
  }))
