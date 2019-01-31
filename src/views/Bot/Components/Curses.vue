<template>
        <v-expansion-panel-content expand-icon="mdi-menu-down">
            <div slot="header" class="headline">Отправка проклятий</div>
            <v-layout class="pl-5 pb-3" wrap>
                <v-flex xs12>
                    <v-checkbox color="orange" color-label="black"
                                label="Автоматически отправлять проклятия в игре!"
                                v-model="sendCurses"/>
                </v-flex>
                <v-flex xs12>
                    <v-form ref="form"
                            v-model="valid"
                            lazy-validation>
                        <v-layout align-center wrap v-for="(item,index) in selected" :key="index">
                            <v-flex xs12 sm4 d-flex class="pr-5">
                                <v-text-field v-model="item.userId" :rules="[...rules.required,...rules.number]"
                                              label="id получателя"/>
                            </v-flex>
                            <v-flex xs11 sm5 offset-sm1 d-flex>
                                <v-select v-model="item.curseId" :rules="rules.required" :items="curses"
                                          item-value="id" item-text="curseName"
                                          label="Выбор проклятия">
                                </v-select>
                            </v-flex>
                            <v-flex xs1 sm2 d-flex>
                                <v-tooltip top>
                                    <v-btn @click="deleteField(index)" flat icon slot="activator">
                                        <v-icon>
                                            close
                                        </v-icon>
                                    </v-btn>
                                    <span>Удалить поле</span>
                                </v-tooltip>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs12>
                                <v-btn class="yellow darken-4 white--text" @click="addField">Додати поле</v-btn>
                                <v-btn @click="submit" color="success">Сохранить</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-flex>
                <v-flex xs12 class="font-weight-bold font-italic mt-2">
                    Примечание: убедитесь что ваш уровень
                    достаточный для отправки выбранных проклятий, в противном случае проклятия не будут
                    отправлены!
                </v-flex>
            </v-layout>
        </v-expansion-panel-content>
</template>

<script>
export default {
    data () {
        return {
            sendCurses: true,
            rules: {
                required: [v => !!v || 'Поле є обов\'язковим'],
                number: [v => /^[0-9]{1,5}$/.test(v) || 'Поле повинно містити число. Кількість чисел від 1 до 5']
            },
            valid: true,
            selected: [{userId: '', curseId: ''}],
            curses: []
        }
    },
    created () {
        this.getCurses()
        this.getCursesList()
    },
    methods: {
        getCurses () {
            this.$http(`/options/curses/${this.$route.params.id}`)
                .then(({data}) => {
                    this.sendCurses = data.isCursesOn
                    if (data.curses === null) {
                        this.selected = [{userId: '', curseId: ''}]
                    } else {
                        this.selected = data.curses
                    }
                })
                .catch(err => {
                    this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
                })
        },
        getCursesList () {
            this.$http('/options/curses')
                .then(({data}) => {
                    this.curses = data
                })
                .catch(err => {
                    this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
                })
        },
        addField () {
            const selected = this.selected.slice()
            selected.push({userId: '', curseId: ''})
            this.selected = selected
        },
        deleteField (index) {
            const selected = this.selected.slice()
            selected.splice(index, 1)
            this.selected = selected
        },
        submit () {
            if (!this.$refs.form.validate()) return

            this.$http.put(`/options/curses/${this.$route.params.id}`, {
                status: this.sendCurses,
                curses: this.selected
            }).then(() => {
                this.$bus.$emit('show-snackbar', 'Успешно сохранено', 'success')
            }).catch(err => {
                this.$bus.$off('show-snackbar', `Произошла ошибка. ${err.message}`, 'error')
            })
        }
    }
}
</script>

<style scoped>

</style>
