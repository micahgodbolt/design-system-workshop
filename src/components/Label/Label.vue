<template>
  <label :data-completed="completed"  @dblclick="$emit(`dblclick`)" class="Label"><slot></slot></label>
</template>

<script>
export default {
  props: ['completed']
}
</script>

<style lang="scss" scoped>
  .Label {
    user-select: none;
    word-break: break-all;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    flex-grow: 1;
  }
  [data-completed="true"] {
    color: #d9d9d9;
    text-decoration: line-through;
  }
</style>

