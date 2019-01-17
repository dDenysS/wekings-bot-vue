<template>
    <v-container fluid>
        <v-layout row justify-center wrap>
            <v-flex xs12 sm9 tag="h2" class="display-1 white px-3 py-3 elevation-1 mb-3">
                Таблица ботов
            </v-flex>
            <v-flex xs12 sm9>
                <bots-table/>
            </v-flex>
            <v-flex xs12 sm9>
                <v-btn color="orange white--text" @click="addBot">Додати бота</v-btn>
                <v-btn color="orange white--text" to="/bot">Налаштування</v-btn>
            </v-flex>
        </v-layout>
        <add-bot-dialog/>
    </v-container>
</template>

<script>
import BotsTable from './components/BotsTable'
import AddBotDialog from './components/AddBotDialog'

export default {
    name: 'Home',
    components: {
        BotsTable,
        AddBotDialog
    },
    methods: {
        addBot () {
            this.$bus.$emit('open-add-bot-dialog')
        }
    }
}
</script>
