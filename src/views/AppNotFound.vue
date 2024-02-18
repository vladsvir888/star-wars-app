<template>
  <section class="not-found container">
    <div class="not-found__wrapper">
      <div class="not-found__image-wrapper">
        <img src="/images/not-found.jpg" class="not-found__image" alt="" width="964" height="647" />
      </div>
      <h1 class="not-found__title">THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.</h1>
      <AppLink :to="{ name: 'Home' }" class="link--hover link--decoration">Go to home</AppLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
</script>

<style scoped>
.not-found__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  background-color: var(--palette-cod-gray);
}

.not-found__image-wrapper {
  max-width: 600px;
  margin-bottom: 60px;
}

.not-found__title {
  max-width: 600px;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
}

.not-found__button {
  min-width: 200px;
}

@media (max-width: 600px) {
  .not-found__title {
    font-size: 25px;
  }

  .not-found__image-wrapper {
    margin-bottom: 20px;
  }
}
</style>
