# Step 2: Complex Components

## Convert filter buttons to Button

1. Create `Button.vue` and scaffold
2. Add the following to template
```
<button @click="$emit(`click`)">
    <slot></slot>
</button>
```
3. Add `name: 'Button'` to default export
4. Add to `App.vue` like in step 1
5. Replace filters buttons with `Button`
6. Class automatically passed through
7. What is `$emit`?
  - [Vue Emit](https://vuejs.org/v2/api/#vm-emit)

## Convert new-todo Textfield
1. What is v-model?
2. Using $log
3. Using Vue Chrome Dev Tools

## Homework!

1. Create Label component
2. Bonus! Create Checkbox
  - Hint: `:checked="value"` is needed to bind the passed in value to the checked property
  - Hint2: `@change="$emit(`change`, $event.target.checked)"` - this emit will pass the value of the checkbox up to the component, and can then used like `@change="(value) => { allDone = value }"`

---
[Next step](./step-3.md)
