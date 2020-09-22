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
                :error-messages="emailErrors"
                placeholder="Введите ваш E-mail"
                required
                v-model="email"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                outlined
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                :error-messages="passErrors"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
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
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'qLogin',
  data() {
    return {
      snackbar: false,
      show: false,
      password: '',
      email: '',
    }
  },
  validations: {
    password: { required, minLength: minLength(4) },
    email: { required, email },
  },
  computed: {
    ...mapGetters(['GET_ERROR']),
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Введите валидный email')
      !this.$v.email.required && errors.push('Введите почту')
      return errors
    },
    passErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push(
          `Пароль не меньше чем ${this.$v.password.$params.minLength.min} символов`
        )
      !this.$v.password.required && errors.push('Введите пароль')
      return errors
    },
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
        } else {
          this.$v.$touch()
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
