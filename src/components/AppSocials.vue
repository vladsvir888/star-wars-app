<template>
  <ul class="socials">
    <li v-for="social in socials" :key="social.label" class="socials__social">
      <AppIconButton
        :href="social.href"
        :name="social.name"
        :label="social.label"
        class="socials__social-link"
        target="_blank"
      ></AppIconButton>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import AppIconButton from '@/components/AppIconButton.vue'

const socials = ref([
  {
    href: 'https://www.instagram.com/starwars/',
    label: 'instagram',
    name: 'instagram'
  },
  {
    href: 'https://www.facebook.com/StarWars',
    label: 'facebook',
    name: 'facebook'
  },
  {
    href: 'https://twitter.com/starwars',
    label: 'twitter',
    name: 'twitter'
  },
  {
    href: 'https://www.tiktok.com/@starwars',
    label: 'tiktok',
    name: 'tiktok'
  }
])
</script>

<style scoped>
.socials {
  display: flex;
  gap: 10px 20px;
}

.socials__social {
  display: flex;
}

.socials__social-link {
  font-size: 25px;
  color: var(--palette-white);
}

.socials__social-link::part(base) {
  padding: 0;
}
</style>
