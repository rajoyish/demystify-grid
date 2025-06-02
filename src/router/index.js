import { createRouter, createWebHistory } from 'vue-router'
import BasicConcepts from '../views/BasicConcepts.vue'
import MarkdownNotesView from '../views/MarkdownNotesView.vue'

const routes = [
  {
    path: '/basic-concepts',
    name: 'BasicConcepts',
    component: BasicConcepts,
    alias: '/',
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
