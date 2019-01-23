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
              <v-checkbox :label="`Автоматически ходить в портал!`" v-model="goToPortal" class="pl-5"></v-checkbox>
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
            goToPortal: true,
            items: [
                {title: 'Портал'}
            ]
        }
    }
}
</script>

<style scoped>

</style>
