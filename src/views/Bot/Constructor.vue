<template>
    <v-container>
            <v-layout class="mb-2">
                <v-flex><h1 class="my-3 pl-3">Настройки бота</h1></v-flex>
            </v-layout>
            <Gifts/>
            <!--<Curses/>-->
            <!--<Mine/>-->
            <!--&lt;!&ndash;<Arena/>&ndash;&gt;-->
            <!--<Dungeon/>-->
            <!--<Sail/>-->
            <!--<Portal/>-->
    </v-container>
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
    name: 'Constructor',
    components: {
        Gifts,
        Curses,
        Mine,
        Arena,
        Dungeon,
        Sail,
        Portal
    },
    beforeRouteEnter (to, from, next) {
        const id = Number(to.params.id)
        if (isNaN(id)) return next({name: 'notFound'})
        next()
    }
}
</script>
