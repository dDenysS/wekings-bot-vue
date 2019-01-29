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
                            color="orange"
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
            <tr :active="props.selected">
                <td>
                    <v-checkbox :input-value="props.selected"
                                @click="props.selected = !props.selected"
                                color="orange"
                                hide-details/>
                </td>
                <td class="text-xs-center">{{ props.item.id }}</td>
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.level }}</td>
                <td class="text-xs-center">
                    <v-btn outline :color="`${props.item.runing?'green':'red'}`">
                        {{props.item.runing?'Запущен':'Не запущен' }}
                    </v-btn>
                </td>
                <td class="text-xs-center">{{ props.item.gold }}</td>
                <td class="text-xs-center">{{ props.item.crystal }}</td>
                <td class="text-xs-center">{{ props.item.silver }}</td>
                <td class="text-xs-center">{{ props.item.fights }}</td>
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
                        <v-btn flat icon @click="syncAccBot(props.item.id, props.index)" slot="activator">
                            <v-icon>
                                update
                            </v-icon>
                        </v-btn>
                        <span>Cинхронизировать аккаунт с ботом</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <v-btn flat icon @click="editBlock(props.item.id)" slot="activator">
                            <v-icon>
                                edit
                            </v-icon>
                        </v-btn>
                        <span>Редактировать</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <v-btn flat icon @click="deleteBot(props.item.id)" slot="activator">
                            <v-icon>
                                close
                            </v-icon>
                        </v-btn>
                        <span>Удалить</span>
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
            {text: 'Уровень', value: 'name'},
            {text: 'Статус', value: 'runing'},
            {text: 'Золото', value: 'gold'},
            {text: 'Кристаллы', value: 'crystal'},
            {text: 'Серебро', value: 'silver'},
            {text: 'Бои', value: 'fights'},
            {text: 'Действия', value: 'actions', sortable: false}
        ],
        loading: {
            table: false
        }
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
            this.$set(this.loading, 'table', true)
            this.$http('/bots').then(({data}) => {
                this.bots = data
            }).catch(err => {
                this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
            }).finally(() => {
                this.$set(this.loading, 'table', false)
            })
        },
        editBlock (id) {
            this.$router.push({name: 'botSettings', params: {id}})
        },
        deleteBot (id) {
            if (this.loading.table) return
            if (!confirm('Я уверен что хочу удалить!!')) return

            this.$http.delete(`/bots/${id}`).then(() => {
                this.getBots()
            }).catch(err => {
                this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
            }).finally(() => {
                this.$set(this.loading, 'table', false)
            })
        },
        syncAccBot (id, index) {
            if (this.loading.table) return

            this.$http(`/bots/sync/${id}`).then(({data}) => {
                const bots = this.bots.slice()
                bots[index] = data
                this.bots = bots
            }).catch(err => {
                this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
            }).finally(() => {
                this.$set(this.loading, 'table', false)
            })
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
