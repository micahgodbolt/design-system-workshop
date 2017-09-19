<template>
  <input
    type="checkbox"
    :checked="value"
    @change="$emit(`change`, $event.target.checked)"
  >
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>

</style>

