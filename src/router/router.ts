import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/note/new',
    name: 'NoteNew',
    component: () =>
      import(/* webpackChunkName: "note-new" */ '@/views/note/NoteNew.vue')
  },
  {
    path: '/note/list',
    name: 'NoteList',
    component: () =>
      import(/* webpackChunkName: "note-list" */ '@/views/note/NoteList.vue')
  },
  {
    path: '/note/:id',
    name: 'NoteDisplay',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "note-display" */ '@/views/note/NoteDisplay.vue'
      )
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
