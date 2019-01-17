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
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">
                    {{ props.item.calories }}
                </td>
                <td class="text-xs-center">
                    {{ props.item.fat }}
                </td>
                <td class="text-xs-center">
                    {{ props.item.carbs }}
                </td>
                <td class="text-xs-center">
                    {{ props.item.protein }}
                </td>
                <td class="text-xs-center">
                    {{ props.item.iron }}
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
        headers: [
            {
                text: 'Dessert (100g serving)',
                align: 'left',
                value: 'name'
            },
            {text: 'Calories', value: 'calories', sortable: false},
            {text: 'Fat (g)', value: 'fat', sortable: false},
            {text: 'Carbs (g)', value: 'carbs', sortable: false},
            {text: 'Protein (g)', value: 'protein'},
            {text: 'Iron (%)', value: 'iron', sortable: false}
        ],
        desserts: [
            {
                value: false,
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
            },
            {
                value: false,
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%'
            }
        ]
    }),

    methods: {
        toggleAll () {
            if (this.selected.length) {
                this.selected = []
            } else {
                this.selected = this.desserts.slice()
            }
        }
    }
}
</script>

<style scoped>

</style>
