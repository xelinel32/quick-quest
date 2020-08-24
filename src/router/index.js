import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'questions',
    path: '/',
    component: () => import('../views/qQuestions.vue'),
    meta: {
      title: 'Questions',
    },
  },
  {
    name: 'contact',
    path: '/contact',
    component: () => import('../views/qContact.vue'),
    meta: {
      title: 'Contact',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'teal--text',
  linkExactActiveClass: '',
  routes,
})

router.beforeEach((to, from, next) => {
  to.matched.forEach(item => (document.title = item.meta.title))
  next()
})

export default router
