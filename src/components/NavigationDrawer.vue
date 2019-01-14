<template>
    <v-navigation-drawer app temporary v-model="sideNav">

        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-icon>face</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Логин пользователя</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0 hidden-md-and-up" dense>
            <v-divider/>

            <v-list-tile v-for="(link, i) in links"
                         :key="i" >
                <v-list-tile-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ link.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider/>

            <v-list-tile v-for="item in items"
                         :key="item.title" >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider/>
            <v-list-tile @click="addAccount">
                <v-list-tile-action>
                    <v-icon>add</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Добавить аккаунт</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavigationDrawer',
    data () {
        return {
            sideNav: true,
            items: [
                {title: 'Аккаунт в игре 1', icon: 'verified_user', url: '/user/account'}
                // { title: 'Добавить аккаунт', icon: 'add' }
            ],
            right: null,
            links: [
                {title: 'Главная', icon: 'home', url: '/'},
            ]
        }
    },
    created () {
        this.$bus.$on('open-navigation-drawer', this.openNavDrawer)
    },
    beforeDestroy () {
        this.$bus.$on('open-navigation-drawer', this.openNavDrawer)
    },
    methods: {
        addAccount () {
            this.items.push({title: 'Аккаунт в игре 3', icon: 'verified_user', url: '/user/account3'})
        },
        openNavDrawer () {
            this.sideNav = true
        }
    }
}
</script>

<style scoped>

</style>
