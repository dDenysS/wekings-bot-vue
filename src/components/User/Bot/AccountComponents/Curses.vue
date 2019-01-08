<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(item ,i) in items"
            :key="i"
            expand-icon="mdi-menu-down"
          >
            <div slot="header" class="display-1">{{ item.title }}</div>

            <v-layout>
              <v-checkbox :label="`Автоматически отправлять проклятия в игре!`" v-model="sendCurses" class="pl-5"></v-checkbox>
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
                  label="Выбор проклятия"
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
                  label="Выбор проклятия"
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
                  label="Выбор проклятия"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-card>
              <v-card-text class="font-weight-bold font-italic">Примечание: убедитесь что ваш уровень достаточный для отправки выбранных проклятий, в противном случае проклятия не будут отправлены!</v-card-text>
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
      sendCurses: true,
      items: [
        {title: 'Отправка проклятий'}
      ],
      gifts: [
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
  }
}
</script>

<style scoped>

</style>
