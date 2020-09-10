<template>
  <v-row>
    <v-col cols="12" lg="12" md="8">
      <v-tabs
        color="green accent-3"
        active-class="green accent-1 black--text"
        centered
        grow
      >
        <v-tab
          v-for="tab in tabNames"
          :key="tab.value"
          @change="traceTab(tab.value)"
          >{{ tab.name }}
        </v-tab>
        <v-tabs-slider color="green accent-3"></v-tabs-slider>
        <v-tab-item v-for="n in 3" :key="n" class="pt-5 pb-5">
          <div v-if="filteredCard.length">
            <v-card
              outlined
              class="pa-2 mb-5 black--text rounded-0 is_bordered-card"
              color=""
              v-for="(question, index) in filteredCard"
              :key="index"
              elevation="0"
            >
              <v-avatar color="black" size="40" tile class="mt-n1 ml-n1">
                <span class="white--text">{{ index + 1 }}</span>
              </v-avatar>
              <v-card-title>{{ question.name }}</v-card-title>
              <v-card-subtitle class="black--text">{{
                question.category
              }}</v-card-subtitle>
              <v-card-text class="black--text text-body-1">
                {{ question.quest }}
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
                    <v-list-item-title>{{ question.name }}</v-list-item-title>
                    <v-list-item-title>{{ question.date }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn dark fab small v-bind="attrs" v-on="on">
                      <v-icon small class="white--text">mdi-thumb-up</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ question.like }}</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </div>
          <div class="text-center" v-else>
            <span class="mb-2 d-block">
              Вопросов в категории <b> {{ showEmptyMessage }} </b> нет!</span
            >
            <br />
            <v-progress-circular
              :size="35"
              color="lime"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'qDataBoard',
  data: () => ({
    questions: [],
    tabNames: [
      {
        name: 'Новые',
        value: 'newer',
      },
      {
        name: 'Старые',
        value: 'older',
      },
      {
        name: 'Закрыто',
        value: 'closed',
      },
    ],
    selectedTab: 'newer',
  }),
  async created() {
    await this.$store.dispatch('FETCH_DATA').then(q => {})
  },
  computed: {
    filteredCard() {
      return this.questions.filter(item => item.tag === this.selectedTab)
    },
    showEmptyMessage() {
      let myItem = ''
      this.tabNames.forEach(item => {
        if (item.value === this.selectedTab) {
          myItem = item.name
        }
      })
      return myItem
    },
  },
  methods: {
    traceTab(val) {
      this.selectedTab = val
    },
  },
}
</script>

<style lang="scss">
.is_bordered-card {
  border: 3px solid #000 !important;
}
</style>
