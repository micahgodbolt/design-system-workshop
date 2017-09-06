<template>
  <h1 class="root">{{text}}<slot></slot></h1>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
.root {
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
}
</style>
