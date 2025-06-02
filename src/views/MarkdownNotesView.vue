<template>
  <div class="markdown-notes-container">
    <div v-if="renderedHtmlContent" class="markdown-content" v-html="renderedHtmlContent"></div>
    <div v-else-if="isLoading" class="loading-placeholder">
      <p>Loading notes for "{{ noteNameToShow }}"...</p>
    </div>
    <div v-else-if="errorLoading" class="error-placeholder">
      <p class="error-message">{{ errorLoading }}</p>
    </div>
    <div v-else class="loading-placeholder">
      <p>Preparing to load notes...</p>
    </div>

    <div class="navigation-links">
      <router-link :to="{ name: 'BasicConcepts' }" class="nav-button">
        ← Back to Interactive Concepts
      </router-link>
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

  try {
    // Import the markdown file as raw text from src/assets/notes/
    const markdownModule = await import(`@/assets/notes/${noteFileName}.md?raw`)
    const markdownText = markdownModule.default
    renderedHtmlContent.value = parseMarkdown(markdownText)
  } catch (err) {
    console.error(`Error loading markdown for ${noteFileName}:`, err)
    errorLoading.value = `Could not load notes for "${noteFileName}". Please check the filename and ensure the .md file exists in src/assets/notes/.`
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

<style scoped>
.markdown-notes-container {
  font-family: 'Hanken Grotesk', sans-serif;
  font-optical-sizing: auto;
  padding: 0 2rem;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  background-color: #fdfdff;
  max-width: 75rem;
  margin: 30px auto;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  color: #333;
}

.loading-placeholder,
.error-placeholder {
  text-align: center;
  padding: 60px 40px;
  font-size: 1.1rem;
  color: #555;
}

.error-message {
  color: #dc2626;
  font-weight: 500;
  margin-bottom: 10px;
}

.navigation-links {
  margin-top: 40px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.nav-button {
  display: inline-block;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid #2563eb;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.nav-button:hover {
  background-color: #2563eb;
  color: white;
  transform: translateY(-1px);
}
</style>

<style>
/* Minimal global styles - let highlight.js theme handle code styling */
.markdown-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  line-height: 1.7;
  font-size: 1.3rem;
  color: #374151;
}

/* Typography - only for non-code elements */
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  color: #111827;
  font-weight: 600;
  margin-top: 4rem;
  margin-bottom: 2rem;
  line-height: 1.25;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.3rem;
}

.markdown-content h1 {
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
}

.markdown-content h2 {
  font-size: 1.875rem;
}

.markdown-content h3 {
  font-size: 1.5rem;
}

.markdown-content h4 {
  font-size: 1.25rem;
}

.markdown-content p {
  margin-bottom: 1.25rem;
}

/* Lists */
.markdown-content ul,
.markdown-content ol {
  margin-bottom: 1.25rem;
  padding-left: 2rem;
}

.markdown-content li {
  margin-bottom: 0.5rem;
}

/* Let highlight.js handle ALL code styling - no overrides */
.markdown-content pre {
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

.markdown-content code {
  font-family: 'Geist Mono', monospace;
  font-optical-sizing: auto;
}

/* Only style inline code that's NOT in pre blocks */
.markdown-content p code,
.markdown-content li code {
  font-family: 'Geist Mono', monospace;
  font-optical-sizing: auto;
  background-color: #d5fff6;
  color: #24292f;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid #24ae90;
}

/* Links */
.markdown-content a {
  color: #0969da;
  text-decoration: none;
  font-weight: 500;
}

.markdown-content a:hover {
  text-decoration: underline;
  color: #0550ae;
}

/* Blockquotes */
.markdown-content blockquote {
  padding: 0 1.5rem;
  color: #656d76;
  border-left: 0.25rem solid #d0d7de;
  margin: 1.5rem 0;
  background-color: #f6f8fa;
  border-radius: 0 6px 6px 0;
  padding: 1rem 1.5rem;
}

/* Tables */
.markdown-content table {
  border-collapse: collapse;
  margin: 1.5rem 0;
  width: 100%;
}

.markdown-content th,
.markdown-content td {
  border: 1px solid #d0d7de;
  padding: 8px 12px;
  text-align: left;
}

.markdown-content th {
  background-color: #f6f8fa;
  font-weight: 600;
}

/* Horizontal rule */
.markdown-content hr {
  border: none;
  border-top: 1px solid #d0d7de;
  margin: 2rem 0;
}

/* Images */
.markdown-content img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 1rem 0;
}

/* Strong and emphasis */
.markdown-content strong {
  font-weight: 600;
  color: #24292f;
}

.markdown-content em {
  font-style: italic;
}
</style>
