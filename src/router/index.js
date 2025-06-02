import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import BasicConcepts from '../views/BasicConcepts.vue'
import MarkdownNotesView from '../views/MarkdownNotesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/basic-concepts',
    name: 'BasicConcepts',
    component: BasicConcepts,
  },
  {
    path: '/notes/:noteName',
    name: 'MarkdownNotes',
    component: MarkdownNotesView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
