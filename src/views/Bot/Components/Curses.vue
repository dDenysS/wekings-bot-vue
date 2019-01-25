<template>
  <v-layout row mt-2>
    <v-flex xs12>
      <v-expansion-panel>
        <v-expansion-panel-content
                v-for="(item ,i) in items"
                :key="i"
                expand-icon="mdi-menu-down">
          <div slot="header" class="display-1">{{ item.title }}</div>
          <v-layout v-if="sendCurses" class="pl-5 pb-3" wrap>
            <v-flex xs12>
              <v-checkbox color="orange" color-label="black"
                          label="Автоматически отправлять проклятия в игре!"
                          v-model="sendCurses"/>
            </v-flex>
            <v-flex xs12>
              <v-form ref="form"
                      v-model="valid"
                      lazy-validation>
                <v-layout align-center v-for="(item,index) in selected" :key="index">
                  <v-flex xs12 sm4 d-flex class="mr-5">
                    <v-text-field v-model="item.userId" :rules="rules.required"
                                  label="id получателя"/>
                  </v-flex>
                  <v-flex xs12 sm4 d-flex>
                    <v-select v-model="item.curse" :rules="rules.required" :items="curses"
                              label="Выбор проклятия"/>
                  </v-flex>
                  <v-flex xs12 sm4 d-flex>
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
              </v-form>
              <v-btn class="yellow darken-4 white--text" @click="addField">Додати поле</v-btn>
            </v-flex>
            <v-btn @click="submit" color="success">Сохранить</v-btn>
            <v-flex xs12 class="font-weight-bold font-italic mt-2">
              Примечание: убедитесь что ваш уровень
              достаточный для отправки выбранных проклятий, в противном случае проклятия не будут
              отправлены!
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data () {
        return {
            sendCurses: true,
            runBot: true,
            rules: {
                required: [v => !!v || 'Поле є обов\'язковим']
            },
            valid: true,
            selected: [{userId: '', curse: ''}],
            items: [
                {title: 'Отправка проклятий'}
            ],
            curses: [
                'Тотем неудачи - с 1 уровня',
                'Когти летучей мыши - с 1 уровня',
                'Жаба - с 2 уровня',
                'Росток аконита - с 5 уровня',
                'Запутаные тропы - с 5 уровня',
                'Демонское копыто - с 6 уровня',
                'Гнилой пень - с 6 уровня',
                'Проклятый топор - с 7 уровня',
                'Рваный башмак - с 7 уровня',
                'Отравленный пирог - с 8 уровня',
                'Зловещая черепушка - с 9 уровня',
                'Останки зверя - с 10 уровня',
                'Стрела безмолвия - с 11 уровня',
                'Когти стервятника - с 11 уровня',
                'Смертельный капкан - с 11 уровня',
                'Дьявольские ключи - с 12 уровня',
                'Чертовский рог - с 13 уровня',
                'Рот дикой свиньи - с 13 уровня',
                'Ножницы судьбы - с 13 уровня',
                'Метла бедствия - с 14 уровня',
                'Кровавый меч - с 15 уровня',
                'Чертов глаз - с 16 уровня',
                'Монеты мертвеца - с 17 уровня',
                'Ведьмовской мешочек - с 18 уровня',
                'Змеиный яд - с 19 уровня',
                'Голова чудовища - с 20 уровня',
                'Жертва дракона - с 21 уровня'
            ]
        }
    },
    created () {
        this.getCurses()
    },
    methods: {
        getCurses () {
            this.$http(`bots/options/curses/${this.$route.params.id}`)
                .then(({data}) => {
                    if (data[0].curses === null) {
                        this.selected = [{userId: '', curse: ''}]
                    } else {
                        this.selected = data[0].curses
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addField () {
            if (this.selected.length >= 3) {
                // TODO error
                console.log('error')
            } else {
                const selected = this.selected.slice()
                selected.push({userId: '', curse: ''})
                this.selected = selected
            }
        },
        deleteField (index) {
            const selected = this.selected.slice()
            selected.splice(index, 1)
            this.selected = selected
        },
        submit () {
            this.$http.put(`/bots/options/curses/${this.$route.params.id}`, this.selected).then(() => {
                this.$bus.$emit('show-snackbar', 'Успешно сохранено', 'success')
            }).catch(err => {
                this.$bus.$off('show-snackbar', `Произошла ошибка. ${err.message}`, 'error')
            })
        }
    }
}
</script>
