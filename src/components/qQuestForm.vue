<template>
  <v-col cols="6">
    <v-form ref="form" @submit.prevent="submitQuestion">
      <v-text-field
        v-model.trim="name"
        outlined
        :rules="nameRules"
        placeholder="Введите ваше имя"
        label="Имя"
        required
      >
      </v-text-field>
      <v-select
        v-model="select"
        outlined
        :items="items"
        :rules="[v => !!v || 'Категория не выбрана']"
        label="Категория"
        placeholder="Выберите категорию вопроса"
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
        placeholder="Напишите ваш вопрос ❤"
        no-resize
      ></v-textarea>
      <v-btn class="success" tile type="submit">
        <v-icon left small>mdi-send</v-icon>
        Отправить
      </v-btn>
    </v-form>
  </v-col>
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
