# Step 7: Bonus!

## [Code Splitting](https://webpack.js.org/guides/code-splitting/#src/components/Sidebar/Sidebar.jsx)

```js
const TodoItem = () => import('./components/TodoItem/TodoItem')
const Nav = () => import('./components/Nav/Nav')
```

## Storybook Knobs

```js
.add('Custom', () => ({
    components: { Button },
    template: `
    <Button
      @click="action"
      variant="${select('Variant', {filter: 'filter', clear: 'clear', destroy: 'destroy'}, 'filter')}"
    >
      ${text('Text', 'completed')}
    </Button>`,
    methods: { action: action('clicked') }
  }))
```