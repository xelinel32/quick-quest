<template>
  <div class="q-quest-form">
    <h1 class="text-center ma-10 display-1">Задайте вопрос</h1>
    <v-row justify="center">
      <v-col cols="8">
        <v-form ref="form" @submit.prevent="submitQuestion">
          <v-text-field
            v-model.trim="name"
            outlined
            :rules="nameRules"
            label="Имя"
            required
          >
          </v-text-field>
          <v-select
            v-model="select"
            outlined
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Категория"
            required
            clearable
          >
          </v-select>
          <v-textarea
            outlined
            label="Введите вопрос"
            height="100"
            required
            :rules="questRules"
            v-model="quest"
          ></v-textarea>
          <v-btn class="success" tile type="submit">
            <v-icon left small>mdi-send</v-icon>
            Отправить
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'qQuestForm',
  data: () => ({
    name: '',
    nameRules: [v => !!v || 'Введите имя'],
    quest: '',
    questRules: [v => !!v || 'Введите вопрос'],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  }),
  methods: {
    submitQuestion() {
      const ourFormData = {
        name: this.name,
        select: this.select,
        quest: this.quest,
      }
      if (Object.keys(ourFormData)) {
        console.log(ourFormData)
      }
    },
  },
}
</script>

<style></style>
