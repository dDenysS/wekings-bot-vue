<template>
  <div>
    <Gifts/>
    <Curses/>
  </div>
</template>

<script>
import Gifts from './AccountComponents/Gifts'
import Curses from './AccountComponents/Curses'
export default {
  components: {
    Gifts,
    Curses
  }
}
</script>

<style scoped>

</style>
