<template>
  <AppHeader />
  <main class="main">
    <RouterView></RouterView>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style></style>
