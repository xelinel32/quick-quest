<template>
  <div class="q-questions">
    <q-section-title>
      <template #center> Задайте вопрос </template>
    </q-section-title>
    <v-row>
      <q-quest-form />
      <q-user-board />
    </v-row>
    <v-divider class="mt-5 mb-5"></v-divider>
    <q-data-board />
  </div>
</template>

<script>
import qQuestForm from '@/components/qQuestForm'
import qDataBoard from '@/components/qDataBoard'
import qUserBoard from '@/components/qUserBoard'
export default {
  name: 'qQuestions',
  components: { qQuestForm, qDataBoard, qUserBoard },
  data: () => ({
    user: 'Artem',
  }),
}
</script>

<style lang="scss"></style>
