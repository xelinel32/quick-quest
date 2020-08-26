<template>
  <div class="q-footer">
    <v-footer app dark absolute>
      <v-row align="center">
        <v-col
          cols="12"
          sm="6"
          :class="
            this.$vuetify.breakpoint.width <= 600 ? 'text-center' : 'text-left'
          "
        >
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="py-2 white--text"
          :class="
            this.$vuetify.breakpoint.width <= 600 ? 'text-center' : 'text-right'
          "
        >
          {{ new Date().getFullYear() }} — <strong>QQ 👍</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'qFooter',
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>

<style lang="scss"></style>
