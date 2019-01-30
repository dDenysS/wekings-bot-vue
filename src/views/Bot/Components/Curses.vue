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
                    <v-flex xs12 sm6 d-flex>
                        <v-select
                                :items="curses"
                                item-text="urlName"
                                label="Url Name"
                        ></v-select>
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
            curses: []
        }
    },
    created () {
        this.getCurses()
        this.getCursesInfo()
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
        getCursesInfo () {
            this.$http('/bots/options/curses')
                .then(({data}) => {
                    this.curses = data
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
