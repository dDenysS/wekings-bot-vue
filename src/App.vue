<template>
  <v-app>
    <router-view/>
  </v-app>
</template>


<script>
import * as types from './store/actions.types'

export default {
    name: 'App',
    created () {
        this.$store.dispatch(types.AUTH_STATUS)
    }
}
</script>
