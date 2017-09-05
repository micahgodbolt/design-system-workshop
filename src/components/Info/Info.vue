<template>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Written by <Link href='http://evanyou.me'>Evan You</Link></p>
    <p>Part of <Link href='http://todomvc.com'>TodoMVC</Link></p>
  </footer>
</template>

<script>

import Link from '../Link/Link'
export default {
  name: 'Info',
  components: {
    Link
  }
}
</script>

<style lang="scss" scoped>
.info {
  margin: 65px auto 0;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}

.info p {
  line-height: 1;
}
</style>
