<template>
  <v-row>
    <q-section-title>
      <template #center>
        Контакты
      </template>
    </q-section-title>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
      dolorum accusamus excepturi sunt rem ab suscipit vero. Rerum, suscipit
      error! Architecto, minus sequi. Quas inventore animi minus sint distinctio
      recusandae? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Distinctio dolorum accusamus excepturi sunt rem ab suscipit vero. Rerum,
      suscipit error! Architecto, minus sequi. Quas inventore animi minus sint
      distinctio recusandae?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
      dolorum accusamus excepturi sunt rem ab suscipit vero. Rerum, suscipit
      error! Architecto, minus sequi. Quas inventore animi minus sint distinctio
      recusandae?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
      dolorum accusamus excepturi sunt rem ab suscipit vero. Rerum, suscipit
      error! Architecto, minus sequi. Quas inventore animi minus sint distinctio
      recusandae?
    </p>
  </v-row>
</template>

<script>
export default {
  name: 'vContact',
  data: () => ({
    products: ['a', 'b'],
  }),
  beforeRouteUpdate(to, from, next) {
    if (this.products.length) {
      next()
    } else {
      next(false)
    }
  },
}
</script>

<style lang="scss"></style>
