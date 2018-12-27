<template>
    <div>
      <v-navigation-drawer app temporary v-model="sideNav">

        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon>face</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Логин пользователя</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-navigation-drawer>
      <v-toolbar app dark color="primary">
        <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title>Bot Name</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>
            <v-icon left>account_box</v-icon>
            Войти</v-btn>
          <v-btn flat>
            <v-icon left>create</v-icon>
            Регистрация</v-btn>
          <v-btn flat @click="sideNav = !sideNav">
            <v-icon left>settings</v-icon>
            Настройки</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>

        <router-view></router-view>

      </v-content>
    </div>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      items: [
        { title: 'Аккаунт в игре 1', icon: 'verified_user' },
        { title: 'Аккаунт в игре 2', icon: 'verified_user' },
        { title: 'Добавить аккаунт', icon: 'add' }
      ],
      right: null
    }
  }
}
</script>

<style scoped>

</style>
