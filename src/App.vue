<template>
  <v-app>
    <keep-alive>
      <component :is="layoutChange"></component>
    </keep-alive>
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
