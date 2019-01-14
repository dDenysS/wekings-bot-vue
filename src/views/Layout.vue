<template>
    <v-app>
        <navigation-drawer/>
        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon @click="openNavDrawer"/>
            <v-toolbar-title>
                <router-link
                        to="/"
                        tag="span"
                        class="title-pointer">
                    WekingsBot
                </router-link>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat
                        v-for="(link, i) in links"
                        :key="i">
                    <v-icon left>{{ link.icon }}</v-icon>
                    {{ link.title }}
                </v-btn>
                <v-btn flat @click="sideNav = !sideNav">
                    <v-icon left>settings</v-icon>
                    Настройки</v-btn>
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
import NavigationDrawer from '../components/NavigationDrawer'

export default {
    name: 'Layout',
    components: {
        Snackbar,
        NavigationDrawer
    },
    data () {
        return {
            links: [
                {title: 'Главная', icon: 'home', url: '/'},
            ]
        }
    },
    methods: {
        openNavDrawer () {
            this.$bus.$emit('open-navigation-drawer')
        }
    }
}
</script>
