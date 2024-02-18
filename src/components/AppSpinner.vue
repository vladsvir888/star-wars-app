<template>
  <div class="spinner-wrapper">
    <p class="spinner-wrapper__text" role="alert">Loading...</p>
    <sl-spinner class="spinner"></sl-spinner>
  </div>
</template>

<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js'
</script>

<style scoped>
.spinner-wrapper {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
  background-color: rgba(0, 0, 0, 0.85);
}

.spinner {
  font-size: 48px;
}
</style>
