<template>
  <footer class="footer">
    <div class="container footer__container">
      <p class="footer__text">More from star wars</p>
      <AppSocials />
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppSocials from '@/components/AppSocials.vue'
</script>

<style scoped>
.footer {
  padding: 35px 0;
}

.footer__text {
  text-transform: capitalize;
  font-weight: 700;
}

.footer__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 15px;
}
</style>
