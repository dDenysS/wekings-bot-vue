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
import Gifts from './Components/Gifts'
import Curses from './Components/Curses'
import Mine from './Components/Mine'
import Arena from './Components/Arena'
import Dungeon from './Components/Dungeon'
import Sail from './Components/Sail'
import Portal from './Components/Portal'

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
