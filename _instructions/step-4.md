# Step 4: Organizing Styles

Explain what has already been done.

## HTML Conventions

<Component class/id/name
  html props
  controlled html props
  custom data props
  emits/functions
/>

## CSS Conventions

1. CSS Scoping
2. BEACSS
3. BlockName vs element vs [data-attribute]
4. Variants

## Convert Checkbox
1. Comment out old css
2. Update Checkbox props with variant
3. Update Checkbox scss
4. Update App.vue, and TodoItem, add variant, remove class

```scss
:focus {
  outline: 0;
}
[data-variant="toggleAll"] {
  display: flex;
  align-content: center;
  flex-basis: 40px;
  -webkit-appearance: none;
  appearance: none;
  &:before {
    content: '❯';
    font-size: 22px;
    line-height: 28px;
    color: #e6e6e6;
    display: block;
    transform: rotate(90deg);
  }
  &:checked:before {
   color: #737373;
  }
}
[data-variant="toggleItem"] {
  user-select: none;
  display: flex;
  align-items: center;
  flex-basis: 40px;
  -webkit-appearance: none;
  appearance: none;
  &:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  &:checked:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
}
```

## Convert Button

## Homework!

1. Convert Label
2. Convert Textfield CSS (Bunus)