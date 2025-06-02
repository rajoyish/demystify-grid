<template>
  <div class="grid">
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
  </div>
</template>

<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.grid > * {
  border: 2px solid red;
  padding: 1rem;
}
</style>
