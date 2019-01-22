<template>
    <v-container fluid>
        <v-layout row justify-center wrap>
            <v-flex xs12 sm9 tag="h2" class="display-1 white px-3 py-3 elevation-1 mb-3">
                Таблица пользователей
            </v-flex>
            <v-flex xs12 sm9>
                <users-table/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import UsersTable from './components/UsersTable'

export default {
    name: 'Admin',
    components: {
        UsersTable
    }
}
</script>

<style scoped>

</style>
