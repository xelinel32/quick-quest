<template>
  <div class="q-error-handler">
    <v-snackbar v-model="snackbar" top right color="info" timeout="5000">
      {{ showError }}
      <template #action="{ attrs }">
        <v-btn
          color="primary"
          icon
          small
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'qErrorHandler',
  data: () => ({
    snackbar: false,
  }),
  props: {
    message: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    ...mapGetters(['GET_ERROR']),
    showError() {
      if (this.GET_ERROR) {
        this.toggleSnack()
        return this.GET_ERROR.message
      } else if (this.$route.query.message === 'login') {
        this.toggleSnack()
        return 'Сначала нужно войти'
      } else if (this.$route.query.message === 'logout') {
        this.toggleSnack()
        return 'Вы выйшли из системы'
      } else {
        return true
      }
    },
  },
  methods: {
    toggleSnack() {
      this.snackbar = true
    },
  },
}
</script>

<style lang="scss"></style>
