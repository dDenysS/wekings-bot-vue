<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <router-link tag="span"
                             class="title-pointer"
                             to="/">
                    WekingsBot
                </router-link>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn :to="{name:'register'}" flat>Реєстрація</v-btn>
                <v-btn :to="{name:'login'}" flat>Авторизація</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view/>
            <snackbar/>
        </v-content>
        <!--<vue-footer/>--><!--//TODO тут потрібно буде додати футер-->
    </v-app>
</template>

<script>
import Snackbar from '../components/Snackbar'

export default {
    name: 'AuthLayout',
    components: {Snackbar}
}
</script>

<style scoped>
    .title-pointer {
        cursor: pointer;
    }
</style>
