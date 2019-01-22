<template>
    <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
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
                    <v-checkbox
                            :input-value="props.selected"
                            primary
                            hide-details/>
                </td>
                <td class="text-xs-center">{{ props.item.id }}</td>
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">
                    {{ props.item.isWork }}
                </td>
                <td class="text-xs-center">
                    {{ props.item.changeSettings }}
                </td>
                <td class="text-xs-center">
                    {{ props.item.removeBot }}
                </td>
            </tr>
            <h1>{{ getDataTest }}</h1>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'BotsTable',
    data: () => ({
        getDataTest: 'test',
        selected: [],
        headers: [
            {text: 'id', value: 'botNumber', sortable: false},
            {
                text: 'Логин бота',
                align: 'left',
                value: 'name'
            },
            {text: 'Включен ли бот', value: 'isWork', sortable: false},
            {text: 'Изменить настройки', value: 'changeSettings', sortable: false},
            {text: 'Удалить бота', value: 'removeBot', sortable: false}
        ],
        desserts: [
            {
                id: 1,
                value: false,
                name: 'Frozen Yogurt',
                isWork: 'Да',
                changeSettings: 6.0,
                removeBot: 24
            }
            // {
            //     botNumber: 2,
            //     value: false,
            //     name: 'Ice cream sandwich',
            //     calories: 237,
            //     fat: 9.0,
            //     carbs: 37,
            //     protein: 4.3,
            //     iron: '1%'
            // }
        ]
    }),

    created () {
        this.getBots()
    },

    methods: {
        toggleAll () {
            if (this.selected.length) {
                this.selected = []
            } else {
                this.selected = this.desserts.slice()
            }
        },

        getBots () {
            this.$http('/bots')
                .then((res) => {
                    this.getDataTest = res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
