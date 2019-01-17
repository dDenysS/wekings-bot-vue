<template>
    <v-container fluid fill-height>
        <v-layout row justify-center fill-height>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Регистрация:</v-toolbar-title>
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
                                    :counter="6"
                                    :rules="rules.password"
                                    v-model="password"/>
                            <v-text-field
                                    prepend-icon="repeat"
                                    name="confirm-password"
                                    label="Подтвердите пароль"
                                    type="password"
                                    :counter="6"
                                    :rules="rules.confirmPassword"
                                    v-model="confirmPassword"/>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                class="ml-auto mb-3"
                                color="primary"
                                @click="onSubmit"
                                :disabled="!valid">
                            Создать аккаунт
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Register',
    data () {
        return {
            email: '',
            password: '',
            confirmPassword: '',
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
                    v => !!v || 'Введите пароль',
                    v => (v && v.length >= 6) || 'Пароль должен быть не меньше 6 символов'
                    // TODO тут тож додати не більше 15 символів
                ],
                confirmPassword: [
                    v => !!v || 'Введите пароль',
                    v => v === this.password || 'Пароль должен совпадать'
                ]
            }
        }
    },
    methods: {
        onSubmit () { // TODO можна не писати ключового слова 'function'
            if (!this.$refs.form.validate()) return

            this.$set(this.loading, 'submitButton', true)
            this.$http.post('/auth/register', {
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            }).then(() => {
                this.$bus.$emit('show-snackbar', 'Аккаунт успешно создан', 'success', 8000)
                this.$router.push({name: 'login'})
            }).catch(err => {
                this.$bus.$emit('show-snackbar', `Ошибка авторизации. ${err.message}`, 'error', 12000)
            }).finally(() => {
                this.$set(this.loading, 'submitButton', true)
            })
        }
    }
}
</script>
