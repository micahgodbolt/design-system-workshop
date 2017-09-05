<template>
  <input
    class="root"
    :data-type="type"
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
  props: ['value', 'placeholder', 'type']
}
</script>

<style lang="scss" scoped>

input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

input::input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}
.root {
  position: relative;
  flex-grow: 1;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  color: inherit;
}
[data-type='edit'] {
  outline-offset: 3px;
  outline: 1px solid rgba(175, 47, 47, 0.2);
}
[data-type='new'] {
  padding: 16px 16px 16px 16px;
  background: rgba(0, 0, 0, 0.003);
}
</style>
