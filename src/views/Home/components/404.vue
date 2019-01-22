<template>
    <v-container>
        <v-layout align-content-center justify-center mt-5>
            <h1>Извините, но страница которую вы искали не найдена.</h1>
        </v-layout>
        <v-layout align-content-center justify-center mt-5>
            <v-btn
                color="primary"
                :to="'/'"
            >Вернуться на главную!</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: '404'
}
</script>

<style scoped>

</style>
