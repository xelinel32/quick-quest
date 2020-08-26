import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/error',
  },
  {
    name: 'questions',
    path: '/',
    component: () => import('../views/qQuestions.vue'),
    meta: {
      title: 'Questions',
      layout: 'default',
      auth: true,
    },
  },
  {
    name: 'contact',
    path: '/contact',
    component: () => import('../views/qContact.vue'),
    meta: {
      title: 'Contact',
      layout: 'default',
      auth: true,
    },
  },
  {
    name: 'error',
    path: '/error',
    component: () => import('../views/qError.vue'),
    meta: {
      title: '404 | Page not found',
      layout: 'empty',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/qLogin.vue'),
    meta: {
      title: 'Login Page',
      layout: 'empty',
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
  // const requireAuth = to.meta.auth
  next()
  // if (requireAuth) {
  //   next('/login?message=login')
  // } else {
  //   next()
  // }
})

export default router
