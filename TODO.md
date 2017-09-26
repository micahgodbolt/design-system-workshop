## Step 0

Planning/Component ID'ing

Vue CLI
Vue TODO MVC

## Step 1 Basic Components

Vue Basics
SFC
export default
  name, props, components, filters

template
  {{}} syntax
  <slot>
  :bind="bind" syntax


h1 -> Title
todo-count -> TodoCount
info -> Info (them)
link -> Link (bonus)

## Step 2 Complex Components (emiting)

filter button -> Button
  talk about emits
  class is auto passed through
input (new-todo only) Textfield -> Textfield
  v-model vs v-bind(:) + @change
  show $log for $event.target
label (them)
input checkbox -> Checkbox (bonus)
  give hint
    :checked="value"
    @change="$emit(`change`, $event.target.checked)"


## Step 3 Iterators
Build List
Build TODO Item
  Most complex component yet
  Combines 4 components

# Lunch

## Step 4 Moving Styles
HTML props order

<Component class/id/name
  html props
  controlled html props
  custom data props
  emits/functions
/>

scoped styles

Using BEACSS naming convention
  move away from class based types to prop based types fed to data attributes

Checkbox (ME)
Button (me)
Label(them)
Textfield(them)

## Step 5 Documentation
(I converted colors to variables etc)

`npm run storybook`

```js
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Button from './Button.vue'

storiesOf('Button', module)
  .add('Filter', () => ({
    components: { Button },
    template: '<Button @click="action" variant="filter">completed</Button>',
    methods: { action: action('clicked') }
  }))
```

Storybook
Button (me)
Textfield (me)

Title (them)
Checkbox (bonus)


Sassdoc

## Step 6

Tests

## Step 7 Bonus!
Code Splitting

Storybook Knobs
button (me)
TodoItem (me)
Title (them)
Label (bonus)