<template>
    <v-data-table
            v-model="selected"
            :headers="headers"
            :items="bots"
            select-all
            hide-actions
            item-key="name"
            class="elevation-1">
        <template
                slot="headers"
                slot-scope="props">
            <tr>
                <th>
                    <v-checkbox
                            :input-value="props.all"
                            :indeterminate="props.indeterminate"
                            primary
                            hide-details
                            @click.stop="toggleAll"/>
                </th>
                <th v-for="header in props.headers"
                    :key="header.text">
                    {{ header.text }}
                </th>
            </tr>
        </template>
        <template
                slot="items"
                slot-scope="props">
            <tr :active="props.selected"
                @click="props.selected = !props.selected">
                <td>
                    <v-checkbox :input-value="props.selected"
                                primary
                                hide-details/>
                </td>
                <td class="text-xs-center">{{ props.item.id }}</td>
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">
                    <v-btn outline :color="`${props.item.runing?'green':'red'}`">
                        {{props.item.runing?'Запущен':'Не запущен' }}
                    </v-btn>
                </td>
                <td class="justify-center align-center layout px-0">
                    <v-tooltip v-if="props.item.runing" top>
                        <v-btn flat icon @click="toggleStateBot(false,props.item.id)" slot="activator">
                            <v-icon>
                                pause_arrow
                            </v-icon>
                        </v-btn>
                        <span>Остановить</span>
                    </v-tooltip>
                    <v-tooltip v-else top>
                        <v-btn @click="toggleStateBot(true,props.item.id)" flat icon slot="activator">
                            <v-icon>
                                play_arrow
                            </v-icon>
                        </v-btn>
                        <span>Запустить</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <v-btn flat icon @click="editBlock(props.item.id)" slot="activator">
                            <v-icon>
                                edit
                            </v-icon>
                        </v-btn>
                        <span>Редактировать</span>
                    </v-tooltip>
                </td>
            </tr>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'BotsTable',
    data: () => ({
        selected: [],
        bots: [],
        headers: [
            {text: 'id', align: 'center', value: 'name'},
            {text: 'Логин', value: 'name'},
            {text: 'Статус', value: 'runing'},
            {text: 'Действия', value: 'actions', sortable: false}
        ]
    }),
    created () {
        this.getBots()
        this.$bus.$on('update-bots-table', this.getBots)
    },
    beforeDestroy () {
        this.$bus.$off('update-bots-table', this.getBots)
    },
    methods: {
        toggleAll () {
            if (this.selected.length) {
                this.selected = []
            } else {
                this.selected = this.bots.slice()
            }
        },
        getBots () {
            this.$http('/bots').then(({data}) => {
                this.bots = data
            })
        },
        editBlock (id) {
            this.$router.push({name: 'botSettings', params: {id}})
        },
        // TODO не реалізовано ще на сервері
        toggleStateBot (state, id) {
            this.$http(`/bots/state/${id}`).then(() => {
                this.getBots()
                this.$bus.$emit('show-snackbar', 'Бот успешно запущен', 'success')
            }).catch(err => {
                this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
            })
        }
    }
}
</script>
