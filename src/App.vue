<template>
  <v-app>
    <component :is="layoutChange"></component>
  </v-app>
</template>

<script>
import defaultLayout from '@/layout/default'
import emptyLayout from '@/layout/empty'
export default {
  name: 'App',
  components: { defaultLayout, emptyLayout },
  computed: {
    layoutChange() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
}
</script>

<style lang="scss"></style>
