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
              <v-checkbox :label="`Автоматически ходить на арену!`" v-model="goToArena" class="pl-5"></v-checkbox>
            </v-layout>

            <v-radio-group class="pl-5">
              <v-radio label="Ровня" value="sameLevel"></v-radio>
              <v-radio label="Выше по уровню" value="higherLevel"></v-radio>
              <v-radio label="Ниже по уровню" value="lowerLevel"></v-radio>
            </v-radio-group>

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
      goToArena: true,
      items: [
        {title: 'Арена'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
