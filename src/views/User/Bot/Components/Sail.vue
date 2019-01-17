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
              <v-checkbox :label="`Автоматически ходить в плавание!`" v-model="goToSail" class="pl-5"></v-checkbox>
            </v-layout>

            <v-radio-group class="pl-5" v-model="radioGroup">
              <v-radio label="С группой" value="sailWithGroup"></v-radio>
              <v-radio label="Ты командир" value="sailYouCaptain"></v-radio>
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
            goToSail: true,
            items: [
                {title: 'Плавание'}
            ],
            radioGroup: 'sailWithGroup'
        }
    }
}
</script>

<style scoped>

</style>
