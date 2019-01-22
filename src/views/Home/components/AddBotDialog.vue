<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog"
                  persistent
                  max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">
                        Додати бота
                    </span>
                </v-card-title>
                <v-card-text class="pt-0">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-container grid-list-md class="pt-0">
                            <v-layout wrap>
                                <v-flex xs12>
                                    <v-text-field v-model="username" label="Имя" required :rules="rules.required"/>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field
                                            v-model="password"
                                            required
                                            :rules="rules.required"
                                            label="Пароль"
                                            hint="Мы не храним пароль. Мы используем другие методы доступа к вашему аккаунту"/>
                                </v-flex>
                                <v-flex xs12>
                                    <v-layout v-if="captchaUrl" align-center>
                                        <v-flex xs12 md4>
                                            <v-text-field
                                                    v-model="code"
                                                    required
                                                    :rules="rules.required"
                                                    label="Код подтверждения"/>
                                        </v-flex>
                                        <v-flex xs12 md3>
                                            <img :src="captchaUrl" class="captcha-url" alt="captcha img">
                                        </v-flex>
                                    </v-layout>
                                    <p v-else>Загрузка капчи...</p>
                                </v-flex>
                                <v-flex xs12>
                                    <p class="red--text">{{responseNotify}}</p>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="blue darken-1"
                           flat
                           @click="dialog = false">
                        Закрыть
                    </v-btn>
                    <v-btn color="success"
                           :loading="loading.submitButton"
                           @click="submitBot">
                        Отправить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
    name: 'AddBotDialog',
    data () {
        return {
            dialog: false,
            rules: {
                required: [v => !!v || 'Заполните поле']
            },
            loading: {
                submitButton: false
            },
            captchaUrl: null,
            username: '',
            password: '',
            valid: null,
            code: '',
            responseNotify: ''
        }
    },
    watch: {
        dialog (val) {
            if (!val) this.handlerClose()
        }
    },
    created () {
        this.$bus.$on('open-add-bot-dialog', this.openDialog)
    },
    methods: {
        openDialog () {
            this.dialog = true
            this.getCaptcha()
        },
        getCaptcha () {
            this.captchaUrl = null
            this.$http('/bots/captcha').then(({data}) => {
                this.captchaUrl = data.img
            })
        },
        submitBot () {
            if (!this.$refs.form.validate()) return

            this.$set(this.loading, 'submitButton', true)
            this.$http.post('/bots/add', {
                username: this.username.trim(),
                password: this.password.trim(),
                code: this.code.trim()
            }).then(() => {
                this.$bus.$emit('update-bots-table')
                this.dialog = false
            }).catch(err => {
                this.responseNotify = err.response.data.notify || err.response.data.message
                this.getCaptcha()
            }).finally(() => {
                this.$set(this.loading, 'submitButton', false)
            })
        },
        handlerClose () {
            this.loading = {
                submitButton: false
            }
            this.captchaUrl = null
            this.username = 'midflash'
            this.password = ' 1Specialized1'
            this.valid = null
            this.code = ''
            this.responseNotify = ''
            this.$refs.form.resetValidation()
        }
    }
}
</script>

<style>
    .captcha-url {
        border: 1px solid #ccc !important;
    }
</style>
