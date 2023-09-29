<template>
  <header class="header">
    <div class="container header__container">
      <AppButton 
        class="header__logo" 
        href="/" 
        variant="text" 
        @click.prevent="clickHandler('/')"
      >
        Star Wars <span class="visually-hidden">Home</span>
      </AppButton>
      <div class="header__menu">
        <AppButton 
          class="header__menu-link" 
          href="/people" 
          @click.prevent="clickHandler('/people')"
        >
          People
        </AppButton>
        <AppButton 
          class="header__menu-link" 
          href="/search" 
          @click.prevent="clickHandler('/search')"
        >
          Search
        </AppButton>
      </div>
      <ul class="header__socials">
        <li 
          v-for="social in socials" 
          :key="social.label" 
          class="header__social"
        >
          <AppIconButton
            :href="social.href"
            :name="social.name"
            :label="social.label"
            class="header__social-link"
            target="_blank"
          ></AppIconButton>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import AppButton from '@/components/UI/AppButton.vue'
import AppIconButton from '@/components/UI/AppIconButton.vue'
import router from '../router';

const clickHandler = (path) => router.push(path);

const socials = [
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
]
</script>

<style scoped>
.header {
  padding: 15px 0 30px;
}

.header__container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.header__logo::part(base) {
  font-size: 30px;
  font-weight: 700;
  color: var(--palette-white);
}

.header__logo::part(label) {
  padding: 0;
}

.header__menu {
  display: flex;
  gap: 10px 20px;
  margin-right: auto;
}

.header__socials {
  display: flex;
  gap: 10px 20px;
}

.header__social {
  display: flex;
}

.header__social-link {
  font-size: 25px;
  color: var(--palette-white);
}

.header__social-link::part(base) {
  padding: 0;
}
</style>
