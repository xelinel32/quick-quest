<template>
  <div class="q-header">
    <v-navigation-drawer app v-model="drawer" dark absolute temporary right>
      <v-list nav>
        <v-list-item-group active-class="teal--text text--accent-4">
          <v-list-item
            v-for="(link, i) of menuLinks"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark dense class="green accent-3">
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
            >
              <v-list-item-title
                class="font-weight-bold text-center text-uppercase"
              >
                Sign In
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-btn rounded @click="openLink" color="secondary">
                  Logout
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
export default {
  name: 'qHeader',
  data: () => ({
    drawer: false,
    menuLinks: [
      {
        name: 'Questions',
        route: '/',
        icon: 'mdi-crosshairs-question',
      },
      {
        name: 'Contact',
        route: '/contact',
        icon: 'mdi-contacts-outline',
      },
    ],
  }),
  methods: {
    openLink() {
      this.$router.push({ name: 'questions', query: { message: 'logout' } })
    },
  },
}
</script>

<style lang="scss"></style>
