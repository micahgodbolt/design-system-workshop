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
1. Comment out old css (375 and 323)
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
1. Comment out old css (264, 412, 476)
2. Update Button props with variant, and :data-variant="variant"
3. Update Button scss
4. Update TodoItem, Nav(App.vue), add variant, remove class

```scss
:focus {
  outline: 0;
}
.Button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
}
[data-variant="filter"] {
  color: #777;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border-color: rgba(#af2f2f, 0.1);
  }
  &.selected {
    border-color: rgba(#af2f2f, 0.2);
  }
}
[data-variant="clear"] {
  color: #777;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
[data-variant="destroy"] {
  user-select: none;
  padding: 0 20px;
  font-size: 30px;
  color: #cc9a9a;
  transition: color 0.2s ease-out;
  &:hover {
    color: #af5b5e;
  }
}
```

TODO
(remove variant and commit, remove label padding)
change destroy button to X in button

## Homework!

1. Convert Label
2. Convert Textfield CSS (Bunus)