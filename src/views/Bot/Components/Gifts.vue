<template>
    <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header" class="headline">Отправка и получение подарков</div>
        <v-layout class="pl-5 pb-3" wrap>
            <v-flex xs12>
                <v-checkbox color="orange" color-label="black"
                            label="Автоматически получать и отправлять подарки в игре!"
                            v-model="receiveGifts"/>
            </v-flex>
            <v-flex xs12>
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
                    <v-layout align-center wrap v-for="(item,index) in selected" :key="index">
                        <v-flex xs12 sm4 d-flex>
                            <v-text-field v-model="item.userId" :rules="[...rules.required,...rules.number]"
                                          label="id получателя"/>
                        </v-flex>
                        <v-flex xs11 sm5 offset-sm1 d-flex>
                            <v-select v-model="item.giftId" :rules="rules.required" :items="gifts"
                                      item-value="id" item-text="giftName"
                                      label="Выбор подарка">
                            </v-select>
                        </v-flex>
                        <v-flex xs11 sm2 d-flex>
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
                        <v-btn class="yellow darken-4 white--text" @click="addField">Додати поле</v-btn>
                        <v-btn @click="submit" color="success">Сохранить</v-btn>
                    </v-layout>
                </v-form>
            </v-flex>
            <v-flex xs12 class="font-weight-bold font-italic mt-2">
                Примечание: убедитесь что ваш уровень
                достаточный для отправки выбранных подарков, в противном случае подарки не будут
                отправлены!
            </v-flex>
        </v-layout>
    </v-expansion-panel-content>
</template>

<script>
export default {
    data () {
        return {
            receiveGifts: true,
            rules: {
                required: [v => !!v || 'Поле є обов\'язковим'],
                number: [v => /^[0-9]{1,5}$/.test(v) || 'Поле повинно містити число. Кількість чисел від 1 до 5']
            },
            valid: true,
            selected: [{userId: '', giftId: ''}],
            gifts: []
        }
    },
    created () {
        this.getGifts()
        this.getGiftsList()
    },
    methods: {
        getGifts () {
            this.$http(`/options/gifts/${this.$route.params.id}`)
                .then(({data}) => {
                    this.receiveGifts = data.isGiftsOn
                    if (data.gifts === null) {
                        this.selected = [{userId: '', giftId: ''}]
                    } else {
                        this.selected = data.gifts
                    }
                })
                .catch(err => {
                    this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
                })
        },
        getGiftsList () {
            this.$http('/options/gifts')
                .then(({data}) => {
                    this.gifts = data
                })
                .catch(err => {
                    this.$bus.$emit('show-snackbar', `Ошибка. ${err.message}`, 'error')
                })
        },
        addField () {
            const selected = this.selected.slice()
            selected.push({userId: '', giftId: ''})
            this.selected = selected
        },
        deleteField (index) {
            const selected = this.selected.slice()
            selected.splice(index, 1)
            this.selected = selected
        },
        submit () {
            if (!this.$refs.form.validate()) return

            this.$http.put(`/options/gifts/${this.$route.params.id}`, {
                status: this.receiveGifts,
                gifts: this.selected
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
