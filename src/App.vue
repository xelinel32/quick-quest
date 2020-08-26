<template>
  <v-app>
    <q-header />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <q-footer />
  </v-app>
</template>

<script>
import qHeader from '@/components/qHeader'
import qFooter from '@/components/qFooter'
export default {
  name: 'App',
  components: {
    qHeader,
    qFooter,
  },
}
</script>

<style lang="scss">
/* @import '~reset-css/sass/_reset.scss'; */
</style>
