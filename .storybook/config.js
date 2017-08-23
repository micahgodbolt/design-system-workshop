import { configure } from '@storybook/vue'

function loadStories() {
  require('../src/components')
}

configure(loadStories, module)
