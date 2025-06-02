<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="hero-title">Demystify CSS Grid</h1>
      <p class="hero-subtitle">
        Master CSS Grid Layout with interactive examples and comprehensive notes
      </p>
    </div>

    <div class="navigation-grid">
      <div class="nav-card">
        <div class="nav-card-icon">🎯</div>
        <h2 class="nav-card-title">Interactive Concepts</h2>
        <p class="nav-card-description">
          Learn CSS Grid through hands-on interactive examples and live demos
        </p>
        <router-link :to="{ name: 'BasicConcepts' }" class="nav-card-button">
          Start Learning
        </router-link>
      </div>

      <div class="nav-card">
        <div class="nav-card-icon">📚</div>
        <h2 class="nav-card-title">Basic Concepts Notes</h2>
        <p class="nav-card-description">
          Comprehensive written guide covering CSS Grid fundamentals and best practices
        </p>
        <router-link
          :to="{ name: 'MarkdownNotes', params: { noteName: 'basic-concepts' } }"
          class="nav-card-button"
        >
          Read Notes
        </router-link>
      </div>
    </div>

    <div class="features-section">
      <h2 class="features-title">What You'll Learn</h2>
      <div class="features-grid">
        <div class="feature-item">
          <h3>Grid Container & Items</h3>
          <p>Understanding the fundamental building blocks of CSS Grid</p>
        </div>
        <div class="feature-item">
          <h3>Grid Lines & Tracks</h3>
          <p>How to define and work with grid structure</p>
        </div>
        <div class="feature-item">
          <h3>Responsive Layouts</h3>
          <p>Creating flexible layouts that adapt to different screen sizes</p>
        </div>
        <div class="feature-item">
          <h3>Real-world Examples</h3>
          <p>Practical applications and common layout patterns</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed for this component
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Hanken Grotesk', sans-serif;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1f2937;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.navigation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.nav-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  text-align: center;
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.nav-card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.nav-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.nav-card-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.nav-card-button {
  display: inline-block;
  background: #2563eb;
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-card-button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.features-section {
  margin-top: 4rem;
}

.features-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2563eb;
}

.feature-item h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: #6b7280;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .navigation-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
