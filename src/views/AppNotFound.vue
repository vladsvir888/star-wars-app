<template>
    <section class="not-found container">
        <div class="not-found__wrapper">
            <div class="not-found__image-wrapper">
                <picture>
                    <source type="image/webp" srcset="/images/not-found.webp">
                    <img src="/images/not-found.jpg" class="not-found__image" alt="" width="964" height="647">
                </picture>
            </div>
            <h1 class="not-found__title">
                THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.
            </h1>
            <AppButton 
                class="not-found__button" 
                href="/" 
                @click.prevent="$router.push('/')"
            >
                Go to home
            </AppButton>
        </div>
    </section>
</template>

<script setup>
import AppButton from '@/components/UI/AppButton.vue';
</script>

<style scoped>
.not-found__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
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
