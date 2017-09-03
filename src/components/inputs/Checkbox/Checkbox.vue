<template>
  <input
    type="checkbox"
    :checked="value"
    v-on:change="$emit(`change`, $event.target.checked)"
  >
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>

</style>
