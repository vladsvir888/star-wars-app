<template>
    <header class="header">
        <div class="container header__container">
            <AppButton href="/" variant="text" class="header__logo">
                Star Wars <span class="visually-hidden">Home</span>
            </AppButton>
            <div class="header__menu">
                <AppButton href="/" class="header__menu-link">
                    People
                </AppButton>
                <AppButton href="/" class="header__menu-link">
                    Search
                </AppButton>
            </div>
            <ul class="header__socials">
                <li v-for="social in socials" :key="social.label">
                    <AppIconButton
                        :href="social.href"
                        :name="social.name"
                        :label="social.label"
                        class="header__social" 
                        target="_blank" 
                    ></AppIconButton>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import AppButton from '@/components/UI/AppButton.vue';
import AppIconButton from '@/components/UI/AppIconButton.vue';

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
];
</script>

<style scoped>
.header {
    padding: 15px 0;
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

.header__menu {
    display: flex;
    gap: 10px 20px;
    margin-right: auto;
}

.header__socials {
    display: flex;
    gap: 10px;
}

.header__social {
    font-size: 25px;
    color: var(--palette-white);
}
</style>