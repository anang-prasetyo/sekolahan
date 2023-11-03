import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// const props = mergeProps({
//   el1: String
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  props: {
    el1: String,
  },
  setup(props) {
    // setup() receives props as the first argument.
    console.log(props)
  },
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 20,
      };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sekolah',
      name: 'sekolah',
      component: () => import('../views/SekolahView.vue')
    },
    {
      path: '/sekolah/sejarahSekolah',
      name: 'sejarahSekolah',
      component: () => import('../views/SekolahView.vue'),
      children: [
        { path: '', component: () => import('../components/SejarahComponent.vue') },
      ],
      props: true
    },
    {
      path: '/guru',
      name: 'guru',
      component: () => import('../views/GuruView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/ppdb',
      name: 'ppdb',
      component: () => import('../views/PpdbView.vue')
    },
    {
      path: '/keahlian',
      name: 'keahlian',
      component: () => import('../views/KeahlianView.vue')
    },
    {
      path: '/extrakulikuler',
      name: 'extrakulikuler',
      component: () => import('../views/ExtrakulikulerView.vue')
    },
    {
      path: '/kaldik',
      name: 'kaldik',
      component: () => import('../views/KaldikView.vue')
    },
    {
      path: '/galery',
      name: 'galery',
      component: () => import('../views/GaleryView.vue')
    },
    {
      path: '/mapel',
      name: 'mapel',
      component: () => import('../views/MapelView.vue')
    }
  ]
})

export default router
