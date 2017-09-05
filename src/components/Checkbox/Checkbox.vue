<template>
  <input
    type="checkbox"
    :data-type="type"
    :checked="value"
    v-on:change="$emit(`change`, $event.target.checked)"
  >
</template>

<script>
export default {
  props: ['value', 'type']
}
</script>

<style lang="scss" scoped>
  [data-type="toggleAll"] {
    display: flex;
    align-content: center;
    flex-basis: 40px;
    -webkit-appearance: none;
    appearance: none;
    &:before {
      content: '❯';
      font-size: 22px;
      line-height: 30px;
      color: #e6e6e6;
      display: block;
      transform: rotate(90deg);
    }
    &:checked:before {
      color: #737373;
    }
  }
  [data-type="toggleItem"] {
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
</style>

