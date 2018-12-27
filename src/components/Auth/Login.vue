<template>
  <v-container>
    <v-layouut row>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Форма входа:</v-toolbar-title>

          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="Email"
                label="Email"
                type="email"
                :rules="emailRules"
                v-model="email"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
                value="пароль"
                :counter="6"
                :rules="passwordRules"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Вход</v-btn>
            <v-btn
              color="primary"
              :to="'/register'"
            >Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layouut>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'Введите свой email',
        v => /.+@.+/.test(v) || 'E-mail должен быть допустимым'
      ],
      passwordRules: [
        v => !!v || 'Введите свой пароль',
        v => (v && v.length >= 6) || 'Пароль должен быть не меньше 6 символов'
      ]
    }
  },
  methods: {
    onSubmit: function () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }

        console.log(user)
      }
    }
  }
}
</script>

<style scoped>

</style>
