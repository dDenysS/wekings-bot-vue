<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-layout justify-space-between>
          <h1 class="my-3 pl-3">Логин пользователя в игре</h1>
          <!--TODO переделать с реактивносьтю и без v-spacer.-->
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-switch
            :label="`Бот включен`"
            v-model="runBot"
          ></v-switch>
        </v-layout>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(item ,i) in items"
            :key="i"
            expand-icon="mdi-menu-down"
          >
            <div slot="header" class="display-1">{{ item.title }}</div>
            <v-layout>
              <v-checkbox :label="`Автоматически получать и отправлять подарки в игре!`" v-model="receiveGifts" class="pl-5"></v-checkbox>
            </v-layout>
            <v-layout  justify-space-around>
              <v-flex xs12 sm5 d-flex>
                <v-text-field
                  label="id получателя"

                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm5 d-flex>
                <v-select
                  :items="gifts"
                  label="Выбор подарка"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout  justify-space-around>
              <v-flex xs12 sm5 d-flex>
                <v-text-field
                  label="id получателя"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm5 d-flex>
                <v-select
                  :items="gifts"
                  label="Выбор подарка"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout  justify-space-around>
              <v-flex xs12 sm5 d-flex>
                <v-text-field
                  label="id получателя"

                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm5 d-flex>
                <v-select
                  :items="gifts"
                  label="Выбор подарка"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-card>
              <v-card-text class="font-weight-bold font-italic">Примечание: убедитесь что ваш уровень достаточный для отправки выбранных подарков, в противном случае подарки не будут отправлены!</v-card-text>
            </v-card>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      receiveGifts: true,
      runBot: true,
      items: [
        {title: 'Отправка и получение подарков'}
      ],
      gifts: [
        // {title: 'Коробочка - с 1 уровня', id: 1}
        'Коробочка - с 1 уровня',
        'Цветочек - с 2 уровня',
        'Чаша здоровья - с 5 уровня',
        'Энергетический напиток - с 5 уровня',
        'Валентинка - с 5 уровня',
        'Сундук - с 6 уровня',
        'Перчатка силы - с 7 уровня',
        'Серебряный капкан - с 8 уровня',
        'Книга знаний - с 8 уровня',
        'Кольцо щедрости - с 8 уровня',
        'Запечатанный конверт - с 10 уровня',
        'Братское знамя - с 10 уровня',
        'Осиновый кол - с 10 уровня',
        'Заколдованные перья - с 11 уровня',
        'Узел достатка - с 11 уровня',
        'Волшебная лилия - с 12 уровня',
        'Храброе сердце - с 13 уровня',
        'Талисман кристаллов - с 14 уровня',
        'Корона - с 14 уровня',
        'Порошок удачи - с 15 уровня',
        'Плащ-невидимка - с 15 уровня',
        'Статуэтка защиты - с 16 уровня',
        'Яд Медузы - с 17 уровня',
        'Магическая энергия - с 18 уровня',
        'Корень драцены - с 20 уровня',
        'Сияние Магмы - с 27 уровня'
      ]
    }
  }
}
</script>

<style scoped>

</style>
