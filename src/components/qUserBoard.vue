<template>
  <v-col cols="6" sm="6">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="green"
      size="24"
    ></v-progress-circular>
    <v-simple-table dense v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Имя пользователя</th>
            <th class="text-left">Кол-во вопросов</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in desserts" :key="idx">
            <td>{{ item.name || item.email }}</td>
            <td>{{ item.counterQuestions }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-col>
</template>

<script>
export default {
  name: 'qUserBoard',
  props: {
    desserts: {
      type: Array,
      required: true,
      default: () => [],
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss"></style>
