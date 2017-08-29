<template>
    <button :class="{ selected: selected == true  }" class="ds-button" @click="btnClick()"> 
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['selected'],
    methods: {
      btnClick () {
        this.$emit('button-click')
      }
    }
  }
</script>

<style lang="scss">

</style>
