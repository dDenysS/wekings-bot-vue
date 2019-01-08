<template>
  <div>
    <Gifts/>
    <Curses/>
    <Mine/>
    <!--<Arena/>-->
    <Dungeon/>
    <Sail/>
    <Portal/>
  </div>
</template>

<script>
import Gifts from './AccountComponents/Gifts'
import Curses from './AccountComponents/Curses'
import Mine from './AccountComponents/Mine'
import Arena from './AccountComponents/Arena'
import Dungeon from './AccountComponents/Dungeon'
import Sail from './AccountComponents/Sail'
import Portal from './AccountComponents/Portal'
export default {
  components: {
    Gifts,
    Curses,
    Mine,
    Arena,
    Dungeon,
    Sail,
    Portal
  }
}
</script>

<style scoped>

</style>
