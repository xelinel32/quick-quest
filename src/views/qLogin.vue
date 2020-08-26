<template>
  <div class="q-login">
    <v-card class="pa-2 elevation-5 ma-auto mt-15" width="600">
      <v-card-title class="text-center d-block mb-4">
        Авторизируйтесь
      </v-card-title>
      <v-form class="pl-7 pr-7 pb-7" @submit.prevent="submitLogin">
        <v-text-field
          append-icon="mdi-email"
          outlined
          label="E-mail"
          :rules="emailRules"
          placeholder="Введите ваш E-mail"
          required
          v-model="email"
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          outlined
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          label="Введите пароль"
          placeholder="Введите текущий пароль"
          counter
          @click:append="show = !show"
        ></v-text-field>
        <v-btn class="success" type="submit">
          <v-icon left small>mdi-account-arrow-right</v-icon>
          Войти
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'qLogin',
  data() {
    return {
      show: false,
      password: '',
      email: '',
      rules: {
        required: value => !!value || 'Введите пароль.',
        min: v => v.length >= 6 || 'Минимум 6 символов',
      },
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /.+@.+\..+/.test(v) || 'Введите коректный E-mail',
      ],
    }
  },
  methods: {
    submitLogin() {},
  },
}
</script>

<style lang="scss"></style>
