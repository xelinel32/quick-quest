<template>
  <v-app>
    <q-header v-if="!showBars" />
    <component :is="layoutChange"></component>
    <q-footer v-if="!showBars" />
  </v-app>
</template>

<script>
import defaultLayout from '@/layout/default'
import emptyLayout from '@/layout/empty'
import qHeader from '@/components/qHeader'
import qFooter from '@/components/qFooter'
export default {
  name: 'App',
  components: { defaultLayout, emptyLayout, qHeader, qFooter },
  computed: {
    layoutChange() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
    showBars() {
      return this.$route.meta.layout === 'empty' ? true : false
    },
  },
}
</script>

<style lang="scss"></style>
