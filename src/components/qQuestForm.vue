<template>
  <v-col cols="6" sm="6">
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
      <v-text-field
        v-model.trim="questHead"
        outlined
        :rules="questHeadRules"
        placeholder="Введите тему вопроса"
        label="Тема вопроса"
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
      <v-btn class="success" :disabled="!disableBtn" type="submit">
        <v-icon left small>mdi-send</v-icon>
        Отправить
      </v-btn>
    </v-form>
    <v-snackbar
      v-model="snackbar"
      color="green accent-4"
      elevation="24"
      timeout="2000"
    >
      {{ alertMessage }}
    </v-snackbar>
  </v-col>
</template>

<script>
export default {
  name: 'qQuestForm',
  props: {
    user: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data: () => ({
    snackbar: false,
    alertMessage: '',
    name: '',
    nameRules: [v => !!v || 'Введите имя'],
    questHead: '',
    questHeadRules: [v => !!v || 'Введите тему вопроса'],
    quest: '',
    questRules: [v => !!v || 'Введите вопрос'],
    select: null,
    items: ['Жизнь', 'Автомобили', 'Программирование', 'Общее'],
  }),
  computed: {
    disableBtn() {
      return this.name && this.quest && this.select && this.questHead
        ? true
        : false
    },
  },
  methods: {
    async submitQuestion() {
      try {
        if (this.name && this.quest && this.select && this.questHead) {
          const ourFormData = {
            name: this.name,
            category: this.select,
            quest: this.quest,
            questHead: this.questHead,
            date: new Date().toLocaleDateString(),
            tag: 'newer',
            avatar: null,
            like: 0,
          }
          await this.$store
            .dispatch('CREATE_QUESTIONS', ourFormData)
            .then(() => {
              this.name = this.quest = this.select = this.questHead = ''
              this.$emit('updUsers')
              this.alertMessage = 'Вопрос добавлен!'
              this.snackbar = true
            })
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.name = this.user.name
  },
}
</script>

<style></style>
