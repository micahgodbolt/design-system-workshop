<template>
<footer class="footer">
  <slot></slot>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 15px;
  height: 20px;
  display: flex;
  align-items: center;
}

.footer > *:first-child {
  flex-basis: 150px;
}

.footer > *:nth-child(n+2) {
  flex-grow: 1;
}
</style>

