<template>
  <a class="Link" :href='href'>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: ['href']
}
</script>

<style lang="scss" scoped>
.Link {
  color: #bfbfbf;
  text-decoration: none;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
}
</style>
