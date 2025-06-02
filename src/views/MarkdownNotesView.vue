<template>
  <div class="markdown-notes-container">
    <div v-if="renderedHtmlContent" class="markdown-content" v-html="renderedHtmlContent"></div>
    <div v-else-if="isLoading" class="loading-placeholder">
      <p>Loading notes for "{{ noteNameToShow }}"...</p>
    </div>
    <div v-else-if="errorLoading" class="error-placeholder">
      <p style="color: red">{{ errorLoading }}</p>
      <p v-if="attemptedPath">
        Attempted to load: <code>{{ attemptedPath }}</code>
      </p>
    </div>
    <div v-else class="loading-placeholder">
      <p>Preparing to load notes...</p>
    </div>

    <div class="navigation-links">
      <p>
        <router-link :to="{ name: 'BasicConcepts' }">Back to Interactive Concepts</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { parseMarkdown } from '@/utils/markdownParser.js'

const route = useRoute()

const renderedHtmlContent = ref('')
const isLoading = ref(false)
const errorLoading = ref(null)
const attemptedPath = ref('')

const noteNameToShow = computed(() => route.params.noteName || 'unknown note')

async function fetchAndRenderMarkdown(noteFileName) {
  if (!noteFileName) {
    errorLoading.value = 'No note name specified in the URL.'
    isLoading.value = false
    return
  }

  isLoading.value = true
  errorLoading.value = null
  renderedHtmlContent.value = ''
  attemptedPath.value = `/notes/${noteFileName}.md`

  try {
    const response = await fetch(attemptedPath.value)
    if (!response.ok) {
      throw new Error(`File not found or error fetching: ${response.status} ${response.statusText}`)
    }
    const markdownText = await response.text()
    renderedHtmlContent.value = parseMarkdown(markdownText)
  } catch (err) {
    console.error(`Error loading or parsing markdown for ${noteFileName}:`, err)
    errorLoading.value = `Could not load notes for "${noteFileName}". Please check the filename and ensure the .md file exists in the public/notes directory.`
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchAndRenderMarkdown(route.params.noteName)
})

watch(
  () => route.params.noteName,
  (newNoteName, oldNoteName) => {
    if (newNoteName && newNoteName !== oldNoteName) {
      fetchAndRenderMarkdown(newNoteName)
    }
  },
)
</script>

<style>
.markdown-notes-container {
  font-family: sans-serif;
  padding: 25px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #fdfdff;
  max-width: 800px;
  margin: 30px auto;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: #333;
}

.loading-placeholder,
.error-placeholder {
  text-align: center;
  padding: 40px;
  font-size: 1.2em;
  color: #555;
}
.error-placeholder code {
  background-color: #ffebeb;
  padding: 2px 4px;
  border-radius: 3px;
  color: #c53030;
}

.markdown-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  line-height: 1.8;
  font-size: 1.05em;
}

/* Highlight.js theme already styles code blocks, but we override font */
.markdown-content pre,
.markdown-content code {
  font-family:
    'Geist Mono', 'Fira Code', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;
  font-variant-ligatures: none;
  font-size: 0.98em;
}

.markdown-content pre {
  border-radius: 6px;
  overflow-x: auto;
  margin: 1.5em 0;
}

.markdown-content :deep(code) {
  background: none;
  color: inherit;
}

.markdown-content :deep(strong) {
  font-weight: 600;
  color: #000;
}
.markdown-content :deep(a) {
  color: #0969da;
  text-decoration: none;
}
.markdown-content :deep(a:hover) {
  text-decoration: underline;
}
.markdown-content :deep(blockquote) {
  padding: 0 1em;
  color: #57606a;
  border-left: 0.25em solid #d0d7de;
  margin: 0 0 1em 0;
}

.navigation-links {
  margin-top: 30px;
  text-align: center;
}
.navigation-links a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}
.navigation-links a:hover {
  text-decoration: underline;
  color: #1d4ed8;
}
</style>
