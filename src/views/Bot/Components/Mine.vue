<template>
  <v-layout row mt-2>
    <v-flex xs12>
      <v-expansion-panel>
        <v-expansion-panel-content
                v-for="(item ,i) in items"
                :key="i"
                expand-icon="mdi-menu-down">
          <div slot="header" class="display-1">{{ item.title }}</div>
          <v-layout v-if="digMine" class="pl-5 pb-3" wrap>
            <v-flex xs12>
              <v-checkbox color="orange" color-label="black"
                          label="Автоматически копать шахту!"
                          v-model="digMine"/>
            </v-flex>
            <v-flex xs12>
              <v-form ref="form"
                      lazy-validation>
                  <v-layout  justify-start v-for="(item,index) in selected" :key="index">
                      <v-flex xs12 sm5 d-flex>
                          <p class="pt-3 headline">Добывать кристаллы если шанс выше:</p>
                      </v-flex>
                      <v-flex xs12 sm5 d-flex>
                          <v-select
                                  v-model="item.chance"
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
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data () {
        return {
            digMine: true,
            runBot: true,
            selected: [{chance: 15}],
            items: [
                {title: 'Шахта'}
            ],
            chanceToMine: [
                15, 20, 25, 30, 35, 40, 45, 50
            ]
        }
    },
    created () {
        this.getChanceToMine()
    },
    methods: {
        getChanceToMine () {
            this.$http(`bots/options/mine/${this.$route.params.id}`)
                .then(({data}) => {
                    if (data === null) {
                        this.selected = []
                    } else {
                        const receivedChance = data[0].chanceToMine
                        this.selected = [{chance: receivedChance}]
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // TODO
        submit () {
            this.$http.put(`/bots/options/mine/${this.$route.params.id}`, this.selected[0].chance).then(() => {
                this.$bus.$emit('show-snackbar', 'Успешно сохранено', 'success')
            }).catch(err => {
                this.$bus.$off('show-snackbar', `Произошла ошибка. ${err.message}`, 'error')
            })
        }
    }
}
</script>
