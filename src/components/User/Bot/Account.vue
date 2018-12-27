<template>
  <div>
    <Gifts/>
    <Curses/>
  </div>

  <!--<v-container>-->
    <!--<v-layout row>-->
      <!--<v-flex xs12>-->
        <!--<h1 class="my-3 pl-3">Логин пользователя в игре</h1>-->
        <!--<v-expansion-panel>-->
          <!--<v-expansion-panel-content-->
            <!--v-for="(item ,i) in items"-->
            <!--:key="i"-->
            <!--expand-icon="mdi-menu-down"-->
          <!--&gt;-->
            <!--<div slot="header" class="display-1">{{ item.title }}</div>-->

            <!--<v-layout  justify-space-around>-->
              <!--<v-flex xs12 sm5 d-flex>-->
                <!--<v-text-field-->
                  <!--label="id получателя"-->

                <!--&gt;</v-text-field>-->
              <!--</v-flex>-->

              <!--<v-flex xs12 sm5 d-flex>-->
                <!--<v-select-->
                  <!--:items="gifts"-->
                  <!--label="Выбор подарка"-->
                <!--&gt;</v-select>-->
              <!--</v-flex>-->
            <!--</v-layout>-->

            <!--<v-layout  justify-space-around>-->
              <!--<v-flex xs12 sm5 d-flex>-->
                <!--<v-text-field-->
                  <!--label="id получателя"-->

                <!--&gt;</v-text-field>-->
              <!--</v-flex>-->

              <!--<v-flex xs12 sm5 d-flex>-->
                <!--<v-select-->
                  <!--:items="gifts"-->
                  <!--label="Выбор подарка"-->
                <!--&gt;</v-select>-->
              <!--</v-flex>-->
            <!--</v-layout>-->

            <!--<v-layout  justify-space-around>-->
              <!--<v-flex xs12 sm5 d-flex>-->
                <!--<v-text-field-->
                  <!--label="id получателя"-->

                <!--&gt;</v-text-field>-->
              <!--</v-flex>-->

              <!--<v-flex xs12 sm5 d-flex>-->
                <!--<v-select-->
                  <!--:items="gifts"-->
                  <!--label="Выбор подарка"-->
                <!--&gt;</v-select>-->
              <!--</v-flex>-->
            <!--</v-layout>-->

            <!--<v-card>-->
              <!--<v-card-text class="font-weight-bold font-italic">Примечание: убедитесь что ваш уровень достаточный для отправки выбранных подарков, в противном случае подарки не будут отправлены!</v-card-text>-->
            <!--</v-card>-->

          <!--</v-expansion-panel-content>-->
        <!--</v-expansion-panel>-->
      <!--</v-flex>-->
    <!--</v-layout>-->
  <!--</v-container>-->
</template>

<script>
import Gifts from './AccountComponents/Gifts'
import Curses from './AccountComponents/Curses'
export default {
  components: {
    Gifts,
    Curses
  }
  // data () {
  //   return {
  //     items: [
  //       {title: 'Отправка и получение подарков'}
  //     ],
  //     gifts: [
  //       'Коробочка - с 1 уровня',
  //       'Цветочек - с 2 уровня',
  //       'Чаша здоровья - с 5 уровня',
  //       'Энергетический напиток - с 5 уровня',
  //       'Валентинка - с 5 уровня',
  //       'Сундук - с 6 уровня',
  //       'Перчатка силы - с 7 уровня',
  //       'Серебряный капкан - с 8 уровня',
  //       'Книга знаний - с 8 уровня',
  //       'Кольцо щедрости - с 8 уровня',
  //       'Запечатанный конверт - с 10 уровня',
  //       'Братское знамя - с 10 уровня',
  //       'Осиновый кол - с 10 уровня',
  //       'Заколдованные перья - с 11 уровня',
  //       'Узел достатка - с 11 уровня',
  //       'Волшебная лилия - с 12 уровня',
  //       'Храброе сердце - с 13 уровня',
  //       'Талисман кристаллов - с 14 уровня',
  //       'Корона - с 14 уровня',
  //       'Порошок удачи - с 15 уровня',
  //       'Плащ-невидимка - с 15 уровня',
  //       'Статуэтка защиты - с 16 уровня',
  //       'Яд Медузы - с 17 уровня',
  //       'Магическая энергия - с 18 уровня',
  //       'Корень драцены - с 20 уровня',
  //       'Сияние Магмы - с 27 уровня'
  //     ]
  //   }
  // }
}
</script>

<style scoped>

</style>
