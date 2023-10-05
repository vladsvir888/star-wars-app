<template>
  <AppHeader />
  <main class="main">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <div>
          <component :is="Component"></component>
        </div>
      </Suspense>
    </RouterView>
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style></style>
