<template>
  <input :class="className" type="checkbox" :v-model="model">
</template>

<script>
export default {
  props: ['className', 'model']
}
</script>

<style>

</style>
