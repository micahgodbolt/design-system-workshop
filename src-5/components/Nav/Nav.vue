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
@import '../../utilities/utilities';
.footer {
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  & > * {
    flex-basis: 0;
    flex-grow: 1;
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
}
</style>

