<template>
  <a :href='href'>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: ['href']
}
</script>

<style>
</style>
