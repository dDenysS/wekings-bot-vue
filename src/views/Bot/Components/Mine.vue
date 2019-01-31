<template>
    <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header" class="headline">Шахта</div>
        <v-layout class="pl-5 pb-3" wrap>
            <v-flex xs12>
                <v-checkbox color="orange" color-label="black"
                            label="Автоматически копать шахту!"
                            v-model="digMine"/>
            </v-flex>
            <v-flex xs12>
                <v-form ref="form"
                        lazy-validation>
                    <v-layout wrap align-center>
                        <v-flex xs12 sm5 d-flex>
                            <p class="pt-3 subheading">Добывать кристаллы если шанс выше:</p>
                        </v-flex>
                        <v-flex xs12 sm5 d-flex>
                            <v-select
                                    v-model="selected"
                                    :items="chanceToMine"
                                    label="Шанс"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>
            <v-btn @click="submit" color="success">Сохранить</v-btn>
        </v-layout>
    </v-expansion-panel-content>
</template>

<script>
export default {
    data () {
        return {
            digMine: true,
            selected: 20,
            chanceToMine: [
                15, 20, 25, 30, 35, 40, 45, 50, 60, 75, 80, 85, 90
            ]
        }
    },
    created () {
        this.getChanceToMine()
    },
    methods: {
        getChanceToMine () {
            this.$http(`/options/mine/${this.$route.params.id}`)
                .then(({data}) => {
                    this.selected = data.chanceToMine
                    this.digMine = data.isMineOn
                })
                .catch(err => {
                    this.$bus.$off('show-snackbar', `Произошла ошибка. ${err.message}`, 'error')
                })
        },
        submit () {
            this.$http.put(`/options/mine/${this.$route.params.id}`, {
                status: this.digMine,
                chanceToMine: this.selected
            }).then(() => {
                this.$bus.$emit('show-snackbar', 'Успешно сохранено', 'success')
            }).catch(err => {
                this.$bus.$off('show-snackbar', `Произошла ошибка. ${err.message}`, 'error')
            })
        }
    }
}
</script>
