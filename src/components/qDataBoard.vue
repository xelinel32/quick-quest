<template>
  <div class="q-data-board mb-10">
    <v-tabs
      color="green accent-3"
      active-class="green accent-1 black--text"
      centered
      grow
    >
      <v-tab>Новые</v-tab>
      <v-tab>Старые</v-tab>
      <v-tab>Закрыто</v-tab>
      <v-tabs-slider color="green accent-3"></v-tabs-slider>
      <v-tab-item v-for="n in 2" :key="n" class="pt-5 pb-5">
        <v-card
          outlined
          class="pa-2 mb-5 black--text rounded-0 is_bordered-card"
          color=""
          v-for="n in 5"
          :key="n"
          elevation="0"
        >
          <v-avatar color="black" size="40" tile class="mt-n2 ml-n2">
            <span class="white--text">{{ n }}</span>
          </v-avatar>
          <v-card-title>Questions name</v-card-title>
          <v-card-subtitle class="black--text">Category</v-card-subtitle>
          <v-card-text class="black--text text-body-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam, dolore natus aut iusto distinctio beatae autem magnam,
            dignissimos voluptatem libero provident laudantium impedit vitae hic
            quidem. Laudantium, quae veritatis
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
                <v-list-item-title>24.08.2020</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark fab small v-bind="attrs" v-on="on">
                  <v-icon small class="white--text">mdi-thumb-up</v-icon>
                </v-btn>
              </template>
              <span>Like count</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'qDataBoard',
  data: () => ({}),
}
</script>

<style lang="scss">
.is_bordered-card {
  border: 2px solid #000 !important;
}
</style>
