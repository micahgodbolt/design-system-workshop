<template>
  <footer class="info">
    <p>Double-click to edit a todo!!</p>
    <p>Written by <Link href='http://evanyou.me'>Evan You</Link></p>
    <p>Part of <Link href='http://todomvc.com'>TodoMVC</Link></p>
  </footer>
</template>

<script>
import Link from '../Link/Link'
export default {
  name: 'Info',
  components: { Link }
}
</script>

<style>

</style>
