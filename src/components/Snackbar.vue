<template>
    <v-snackbar
            v-model="snackbar"
            :bottom="y === 'bottom'"
            :left="x === 'left'"
            :multi-line="mode === 'multi-line'"
            :right="x === 'right'"
            :timeout="timeout"
            :top="y === 'top'"
            :color="color"
            :vertical="mode === 'vertical'">
        {{ text }}
        <v-btn
                flat
                @click="snackbar = false">
            Закрити
        </v-btn>
    </v-snackbar>
</template>

<script>
export default {
    name: 'Snackbar',
    data () {
        return {
            snackbar: false,
            y: 'top',
            x: 'right',
            color: 'success',
            timeout: 6000,
            mode: '',
            text: ''
        }
    },
    created () {
        this.$bus.$on('show-snackbar', this.handleEmit)
    },
    beforeDestroy () {
        this.$bus.$off('show-snackbar', this.handleEmit)
    },
    methods: {
        handleEmit (text, color = 'success', timeout = 6000) {
            this.snackbar = true
            this.color = color
            this.text = text
            this.timeout = timeout
        }
    }
}
</script>
