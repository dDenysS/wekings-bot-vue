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

        <v-list class="pt-0 hidden-md-and-up" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="(link, i) in links"
            :key="i"
            :to="link.url"
          >
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.url"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile @click="addAccount">
            <v-list-tile-action>
              <v-icon>add</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Добавить аккаунт</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-navigation-drawer>
      <v-toolbar app dark color="primary">
        <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link
            :to="'/'"
            tag="span"
            class="title-pointer"
          >Bot Name</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            flat
            v-for="(link, i) in links"
            :key="i"
            :to="link.url"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
          </v-btn>

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
        { title: 'Аккаунт в игре 1', icon: 'verified_user', url: '/user/account' }
        // { title: 'Добавить аккаунт', icon: 'add' }
      ],
      right: null,
      links: [
        {title: 'Главная', icon: 'home', url: '/'},
        {title: 'Войти', icon: 'account_box', url: '/login'},
        {title: 'Регистрация', icon: 'add', url: '/register'}
      ]
    }
  },
  methods: {
    addAccount: function () {
      this.items.push({ title: 'Аккаунт в игре 3', icon: 'verified_user', url: '/user/account3' })
    }
  }
}
</script>

<style scoped>
  .title-pointer {
    cursor: pointer;
  }
</style>
