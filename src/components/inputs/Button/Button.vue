<template>
    <button class="ds-button" @click="onClick"> 
        <slot></slot> 
    </button>
</template>

<script>
  export default {
    name: 'Button',
    methods: {
      onClick () {
      }
    }
  }
</script>

<style lang="scss">
$color: red;
.ds-button {
    background: $color;
}
</style>
