<template>
  <div class="default">
    <q-header />
    <v-main>
      <v-container>
        <vue-page-transition name="fade-in-right">
          <router-view />
        </vue-page-transition>
      </v-container>
    </v-main>
    <q-footer />
  </div>
</template>

<script>
import qHeader from '@/components/qHeader'
import qFooter from '@/components/qFooter'
export default {
  name: 'default',
  components: {
    qHeader,
    qFooter,
  },
}
</script>

<style lang="scss"></style>
