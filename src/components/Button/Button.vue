<template>
    <button :data-type="type" class="Button" @click="$emit(`click`)">
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['type']
  }
</script>

<style lang="scss" scoped>
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
  [data-type='filter'] {
    color: #777;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    &:hover {
      border-color: rgba(175, 47, 47, 0.1);
    }
    &.selected {
      border-color: rgba(175, 47, 47, 0.2);
    }
  }
  [data-type='clear'] {
    color: #777;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  [data-type='destroy'] {
    user-select: none;
    padding: 0 20px;
    font-size: 30px;
    color: #cc9a9a;
    transition: color 0.2s ease-out;
    &:hover {
      color: #af5b5e;
    }
   }
</style>
