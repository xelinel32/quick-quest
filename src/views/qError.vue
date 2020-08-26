<template>
  <div class="q-error">
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-card elevation="0" class="mt-15">
          <v-card-title
            class="display-4 font-weight-black text-center d-block green--text"
          >
            404
          </v-card-title>
          <v-card-subtitle
            class="display-3 font-weight-black text-center d-block text-uppercase"
          >
            Page not found
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              large
              class="ma-2"
              outlined
              color="primary"
              route
              to="/"
              >Home</v-btn
            >
            <v-btn large class="ma-2" outlined color="warning" route to="/login"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'qError',
}
</script>

<style lang="scss"></style>
