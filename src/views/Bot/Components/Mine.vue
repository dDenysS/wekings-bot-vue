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
              <v-checkbox :label="`Автоматически копать шахту!`" v-model="digMine" class="pl-5"></v-checkbox>
            </v-layout>

            <v-layout  justify-space-around>
              <v-flex xs12 sm5 d-flex>
                <p class="pt-3 headline">Добывать кристаллы если шанс выше:</p>
              </v-flex>

              <v-flex xs12 sm5 d-flex>
                <v-select
                  :items="chanceToMine"
                  label="Шанс"
                ></v-select>
              </v-flex>
            </v-layout>
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
            digMine: true,
            items: [
                {title: 'Шахта'}
            ],
            chanceToMine: [
                15, 20, 25, 30, 35, 40, 45, 50
            ]
        }
    }
}
</script>

<style scoped>

</style>
