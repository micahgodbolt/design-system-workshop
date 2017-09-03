<template>
  <input
    autofocus
    autocomplete="off"
    :value="value"
    :placeholder="placeholder"
    v-on:change="$emit(`input`, $event.target.value)"
    @keyup.enter="$emit(`enter`)"
    @keyup.esc="$emit(`esc`)"
    @blur="$emit(`blur`)"
  >
</template>

<script>
export default {
  name: 'TextField',
  props: ['value', 'placeholder']
}
</script>

<style>

</style>
