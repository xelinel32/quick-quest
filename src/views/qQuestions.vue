<template>
  <v-row>
    <v-col cols="12">
      <q-section-title>
        <template #center> Задайте вопрос </template>
      </q-section-title>
      <v-row>
        <q-quest-form :user="GET_USER" @updUsers="updUsers" />
        <q-user-board :desserts="desserts" :loading="load" />
      </v-row>
      <v-divider class="mt-5 mb-5"></v-divider>
      <q-data-board />
    </v-col>
  </v-row>
</template>

<script>
import qQuestForm from '@/components/qQuestForm'
import qDataBoard from '@/components/qDataBoard'
import qUserBoard from '@/components/qUserBoard'
import { mapGetters } from 'vuex'
export default {
  name: 'qQuestions',
  data: () => ({
    desserts: [],
    load: true,
  }),
  computed: { ...mapGetters(['GET_USER', 'GET_USERS']) },
  components: { qQuestForm, qDataBoard, qUserBoard },
  methods: {
    async updUsers() {
      await this.$store.dispatch('FETCH_USERS').then(data => {
        this.desserts = data
        this.load = false
      })
    },
  },
  async created() {
    await this.$store.dispatch('FETCH_USERS').then(() => {
      this.desserts = this.GET_USERS
      this.load = false
    })
  },
}
</script>

<style lang="scss"></style>
