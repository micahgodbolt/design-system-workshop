# Step 5: Documentation

## [Storybook](https://storybook.js.org/)

`npm run storybook`

### Write stories for Button

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


### Write stories for Textfield


### Homework!

1. Convert Label
2. Convert Textfield CSS (Bunus)

## [Sassdoc](http://sassdoc.com/)

`npm run sassdoc`

```
@author
@deprecated
@example
@link
@name
@output
@param/@arg
@require
@throw
@todo
@type

```

### Adding variables
```scss
/// @todo
/// @type string
```

### Mixins and Functions

```scss
/// lighter() - Unified color lightening
/// @param {color} $color - color to lighten
/// @param {number} $steps - number of steps to lighten the color
/// @example scss - lighter()
///   lighter(#333, 2)
///   // #666666
```
