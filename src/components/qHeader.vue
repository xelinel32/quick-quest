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
    <v-app-bar app dark class="teal accent-3">
      <v-toolbar-title class="black--text font-weight-bold">
        QuickQestions ✔
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-xs-only">
        <v-btn
          v-for="(link, i) of menuLinks"
          :key="i"
          route
          :to="link.route"
          tile
          class="ma-2"
          active-class="teal--text"
        >
          {{ link.name }}
        </v-btn>
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
      },
      {
        name: 'Contact',
        route: '/contact',
      },
    ],
  }),
}
</script>

<style lang="scss"></style>
