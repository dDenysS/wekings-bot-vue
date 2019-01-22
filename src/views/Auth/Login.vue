<template>
    <v-container fluid fill-height>
        <v-layout row justify-center>
            <v-flex xs12 sm8 md6>
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
                                    :rules="rules.email"
                                    v-model="email"/>
                            <!-- //TODO від 6 до 15 символів :counter-->
                            <v-text-field
                                    prepend-icon="lock"
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    value="пароль"
                                    :counter="(6, 15)"
                                    :rules="rules.password"
                                    v-model="password"/>
                        </v-form>
                        <div>
                            <v-btn color="grey" flat
                                   :to="{name:'register'}">
                                Немає акаунта? Зарегистрироваться
                            </v-btn>
                        </div>
                    </v-card-text >
                    <v-card-actions class="justify-space-between">
                        <v-layout>
                            <v-spacer/>
                            <v-btn color="indigo white--text" class="mr-3">
                                Забыли пароль?
                            </v-btn>
                            <v-btn color="green white--text"
                                   @click="onSubmit"
                                   :loading="loading.submitButton"
                                   :disabled="!valid">
                                Вход
                            </v-btn>
                        </v-layout>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import * as types from '../../store/actions.types'

export default {
    name: 'Login', // TODO не забувай компонентам додавати name. Щоб в консолы юачити назву компонента в якому помилка
    data () {
        return {
            email: 'test@test.test',
            password: 'zxcasd',
            valid: false,
            loading: {
                submitButton: false
            },
            rules: {
                email: [
                    v => !!v || 'Введите свой email',
                    v => /.+@.+\..+/.test(v) || 'E-mail должен быть допустимым'
                ],
                password: [
                    v => !!v || 'Введите свой пароль',
                    v => (v && v.length >= 6) || 'Пароль должен быть не меньше 6 символов',
                    v => (v && v.length <= 15) || 'Пароль должен быть не больше 15 символов'
                    // TODO Додати щоб не більше 15 символів
                ]
            }
        }
    },
    methods: {
        onSubmit () {
            if (!this.$refs.form.validate()) return

            this.$set(this.loading, 'submitButton', true)
            this.$store.dispatch(types.AUTH_SING_IN, {
                email: this.email,
                password: this.password
            }).catch(err => {
                this.$bus.$emit('show-snackbar', `Ошибка авторизации. ${err.message}`, 'error', 12000)
            }).finally(() => {
                this.$set(this.loading, 'submitButton', false)
            })
        }
    }
}
</script>
