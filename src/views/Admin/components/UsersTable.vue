<template>
    <v-card>
        <v-card-title>
            <v-spacer/>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    @click:append="getUsers"
                    label="Пошук по email"
                    single-line
                    hide-details/>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="users"
                :pagination.sync="pagination"
                :total-items="totalItems"
                class="elevation-1">
            <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.id }}</td>
                <td class="text-xs-center">{{ props.item.email}}</td>
                <td class="text-xs-center">{{ props.item.allowAmountBots }}</td>
                <td class="text-xs-center">
                    <v-btn outline :color="`${props.item.accessEnableBots?'green':'red'}`">
                        {{props.item.accessEnableBots?'Разрешено':'Не разрешено' }}
                    </v-btn>
                </td>
                <td class="justify-center align-center layout px-0">
                    <v-tooltip v-if="props.item.accessEnableBots" top>
                        <v-icon class="mr-2"
                                slot="activator"
                                @click="lockBots(props.item.id)">
                            lock
                        </v-icon>
                        <span>Закрыть доступ к ботам и отключить</span>
                    </v-tooltip>
                    <v-tooltip v-else top>
                        <v-icon class="mr-2"
                                slot="activator"
                                @click="openLockBots(props.item.id)">
                            lock_open
                        </v-icon>
                            <span>Открыть доступ к ботам</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <v-icon class="mr-2"
                                slot="activator"
                                @click="editAmountBots(props.item.id)">
                            edit
                        </v-icon>
                        <span>Изменить количество ботов</span>
                    </v-tooltip>
                </td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    name: 'UsersTable',
    data () {
        return {
            totalItems: 0,
            pagination: {},
            search: '',
            headers: [
                {text: 'id', align: 'center', value: 'id'},
                {text: 'E-mail', align: 'center', value: 'email'},
                {text: 'Количество ботов', align: 'center', value: 'allowAmountBots'},
                {text: 'Использование ботов', align: 'center', value: 'allowedBots'},
                {text: 'Действия', value: 'actions', sortable: false}
            ],
            users: []
        }
    },
    watch: {
        pagination: {
            deep: true,
            handler () {
                this.getUsers()
            }
        }
    },
    methods: {
        getUsers () {
            const {pagination} = this
            this.$http('/admin/users', {
                params: {
                    descending: pagination.descending,
                    rowsPerPage: pagination.rowsPerPage,
                    sortBy: pagination.sortBy,
                    page: pagination.page - 1,
                    search: this.search
                }
            }).then(({data}) => {
                this.totalItems = data.total
                this.users = data.results
            })
        }
    }
}
</script>
