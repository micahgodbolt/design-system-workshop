# Step 6: Testing

[BackstopJS](https://garris.github.io/BackstopJS/)

Run Tests

`npm run vtest`

Approve baselines

`npm run vtestApprove`



## Tests for
1. Button
```js
module.exports = {
  'scenarios': [
    {
      'label': 'Filter Button',
      'story': 'Filter'
    },
    {
      'label': 'Filter Button Hover',
      'story': 'Filter',
      'hoverSelector': '.Button'
    },
    {
      'label': 'Filter Button Active',
      'story': 'Filter Active'
    },
    {
      'label': 'Clear Button',
      'story': 'Clear'
    },
    {
      'label': 'Clear Button Hover',
      'story': 'Clear',
      'hoverSelector': '.Button'
    },
    {
      'label': 'Destroy Button',
      'story': 'Destroy'
    },
    {
      'label': 'Destroy Button Hover',
      'story': 'Destroy',
      'hoverSelector': '.Button'
    }
  ]
}
```

## Homework!

1. Title tests
2. TodoItem tests

---
[Next step](./step-7.md)
