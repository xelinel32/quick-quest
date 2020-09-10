<template>
  <v-row align="center">
    <v-col cols="12">
      <v-card class="pa-2 elevation-5 ma-auto mt-15" width="600">
        <v-card-title class="text-center d-block mb-4">
          Авторизируйтесь
        </v-card-title>
        <v-form
          class="pl-lg-7 pr-lg-7 pr-4 pl-4 pb-7"
          @submit.prevent="submitLogin"
        >
          <v-row>
            <v-col cols="12">
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
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                outlined
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passRules.required, passRules.min]"
                :type="show ? 'text' : 'password'"
                label="Введите пароль"
                placeholder="Введите текущий пароль"
                counter
                @click:append="show = !show"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex">
              <v-btn class="success" type="submit">
                <v-icon left small>mdi-account-arrow-right</v-icon>
                Войти
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="red" small fab @click="googleSignIn">
                <v-icon color="white">mdi-google</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
      <q-error-handler />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'qLogin',
  data() {
    return {
      snackbar: false,
      show: false,
      password: '',
      email: '',
      passRules: {
        required: value => !!value || 'Введите пароль.',
        min: v => v.length >= 6 || 'Минимум 6 символов',
      },
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /.+@.+\..+/.test(v) || 'Введите коректный E-mail',
      ],
    }
  },
  computed: {
    ...mapGetters(['GET_ERROR']),
  },
  methods: {
    async submitLogin() {
      try {
        if (this.password && this.email) {
          const formData = {
            email: this.email,
            password: this.password,
          }
          await this.$store.dispatch('LOGIN', formData).then(() => {
            this.$router.push('/')
          })
        }
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async googleSignIn() {
      try {
        await this.$store.dispatch('GOOGLE_SIGNIN').then(() => {
          this.$router.push('/')
        })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
  },
}
</script>

<style lang="scss"></style>
