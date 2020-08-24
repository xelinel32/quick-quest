<template>
  <v-app>
    <q-header />
    <v-main>
      <v-container>
        <router-view name="default" />
      </v-container>
    </v-main>
    <v-footer app dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <v-row justify="center">
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>QuickQuestions 👍</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import qHeader from '@/components/qHeader'
export default {
  name: 'App',
  components: {
    qHeader,
  },
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>

<style lang="scss">
@import '~reset-css/sass/_reset.scss';
</style>
