<template>
  <div class="q-header">
    <v-navigation-drawer
      app
      v-model="drawer"
      dark
      fixed
      temporary
      right
      :height="'100%'"
    >
      <v-list nav>
        <v-list-item-group active-class="green--text text--accent-4">
          <v-list-item
            v-for="(link, i) of menuLinks"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            route
            to="/login"
            active-class="green accent-4 white--text"
            v-if="!GET_USER"
          >
            <v-list-item-title>Войти</v-list-item-title>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-title>{{
              GET_USER.name || GET_USER.email
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template #append>
        <v-btn block tile @click="openLink" color="secondary">Выйти</v-btn>
      </template>
    </v-navigation-drawer>
    <v-app-bar app dark hide-on-scroll class="green accent-3">
      <v-toolbar-title class="black--text font-weight-bold">
        QQ
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-xs-only">
        <v-btn
          v-for="(link, i) of menuLinks"
          :key="i"
          route
          :to="link.route"
          text
          class="ma-2"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark fab small class="ma-2" v-bind="attrs" v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-2">
            <v-list-item
              route
              to="login"
              active-class="teal accent-4 white--text"
              v-if="!GET_USER"
            >
              <v-list-item-title
                class="font-weight-bold text-center text-uppercase"
              >
                Войти
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-else>
              <v-list-item-title>{{
                GET_USER.name || GET_USER.email
              }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-btn rounded @click="openLink" block color="secondary">
                  Выйти
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-app-bar-nav-icon
        class="black white--text hidden-sm-and-up"
        large
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'qHeader',
  data: () => ({
    drawer: false,
    menuLinks: [
      {
        name: 'Вопросы',
        route: '/',
        icon: 'mdi-crosshairs-question',
      },
      {
        name: 'Контакты',
        route: '/contact',
        icon: 'mdi-contacts-outline',
      },
    ],
  }),
  computed: {
    ...mapGetters(['GET_USER']),
  },
  methods: {
    openLink() {
      this.$store.dispatch('LOGOUT').then(() => {
        this.$router.push({ name: 'login', query: { message: 'logout' } })
      })
    },
  },
}
</script>

<style lang="scss"></style>
