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
</style>

