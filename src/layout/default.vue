<template>
  <v-main>
    <v-container>
      <vue-page-transition name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'default',
}
</script>

<style lang="scss"></style>
