<template>
  <ul>
    <li v-for="item in data" :key="item.id">
      <slot name="item" :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>

</style>
