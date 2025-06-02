<template>
  <div id="app-layout">
    <header class="app-header">
      <div class="logo">CSS Grid Learner</div>
      <nav class="app-nav">
        <router-link :to="{ name: 'BasicConcepts' }"> Interactive Concepts </router-link>
        <router-link :to="{ name: 'MarkdownNotes', params: { noteName: 'basic-concepts' } }">
          Basic Concepts Notes
        </router-link>
      </nav>
    </header>

    <main class="app-main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="app-footer">
      <p>&copy; {{ new Date().getFullYear() }} CSS Grid Learning Platform</p>
    </footer>
  </div>
</template>

<script setup>
// No specific script logic needed for App.vue in this basic setup
</script>

<style scoped>
/* Your existing styles remain the same */
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  background-color: #f3f4f6;
}

.app-header {
  background-color: #ffffff;
  padding: 15px 30px;
  color: #1f2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #2563eb;
}

.app-nav {
  display: flex;
  gap: 25px;
}

.app-nav a {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

.app-nav a:hover {
  background-color: #eff6ff;
  color: #1d4ed8;
}

.app-nav a.router-link-exact-active {
  background-color: #dbeafe;
  color: #1e40af;
  font-weight: 600;
}

.app-main-content {
  flex-grow: 1;
  padding: 20px;
}

.app-footer {
  background-color: #1f2937;
  color: #d1d5db;
  text-align: center;
  padding: 20px;
  font-size: 0.9em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
