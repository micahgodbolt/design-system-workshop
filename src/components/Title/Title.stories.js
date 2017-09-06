import { storiesOf } from '@storybook/vue'

import Title from './Title.vue'

storiesOf('Title', module)
  .add('Title', () => ({
    components: { Title },
    template: '<Title>title</Title>'
  }))
