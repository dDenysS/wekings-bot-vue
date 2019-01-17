<template>
    <v-app>
        <v-toolbar app dark color="primary">
            <v-toolbar-title>
                <router-link
                        to="/"
                        tag="span"
                        class="title-pointer">
                    WekingsBot
                </router-link>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn flat @click="sideNav = !sideNav">
                    <v-icon left>settings</v-icon>
                    Настройки
                </v-btn>
                <v-btn flat @click="logout">
                    <v-icon left>exit_to_app</v-icon>
                    Вийти
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view/>
            <snackbar/>
        </v-content>
    </v-app>
</template>

<script>
import Snackbar from '../components/Snackbar'
import * as types from '../store/actions.types'

export default {
    name: 'Layout',
    components: {
        Snackbar
    },
    methods: {
        logout () {
            this.$store.dispatch(types.AUTH_LOGOUT).catch(err => {
                this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error', 7000)
            })
        }
    }
}
</script>
