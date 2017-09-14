<template>
  <input
    class="Textfield"
    :data-type="type"
    autofocus
    autocomplete="off"
    :value="value"
    :placeholder="placeholder"
    @change="$emit(`input`, $event.target.value)"
    @keyup.enter="$emit(`enter`)"
    @keyup.esc="$emit(`esc`)"
    @blur="$emit(`blur`)"
  >
</template>

<script>
export default {
  name: 'Textfield',
  props: ['value', 'placeholder', 'type']
}
</script>

<style lang="scss" scoped>
@import '../../utilities/utilities';
input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: $neutralLighter;
}

input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: $neutralLighter;
}

input::input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: $neutralLighter;
}
:focus {
  outline: none;
}
.Textfield {
  position: relative;
  font-size: 24px;
  width: 100%;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  color: inherit;
}
[data-type='edit'] {
  outline-offset: 3px;
  outline: 1px solid rgba($red, 0.2);
}
[data-type='new'] {
  padding: 16px 16px 16px 16px;
  background: rgba($fg, 0.003);
}
</style>
