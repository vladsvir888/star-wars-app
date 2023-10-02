<template>
  <section class="hero-slider">
    <div class="container">
      <swiper-container init="false" ref="slider" class="hero-slider__slider">
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="slide.title"
          class="hero-slider__slide"
        >
          <div class="hero-slider__content">
            <h2 class="hero-slider__title">{{ slide.title }}</h2>
            <p class="hero-slider__description">{{ slide.text }}</p>
          </div>
          <div class="hero-slider__image-wrapper">
            <picture>
              <source type="image/webp" :srcset="`/images/hero-slide-${index + 1}.webp`" />
              <img
                :src="`/images/hero-slide-${index + 1}.jpg`"
                :loading="slide?.image?.lazy ? 'lazy' : 'auto'"
                alt=""
                width="2048"
                height="878"
              />
            </picture>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { register } from 'swiper/element/bundle'

register()

const slider = ref(null)
const slides = [
  {
    title: 'How the ILM Model Shop Brought Ahsoka’s T-6 Jedi Shuttle to Life',
    text: 'Go behind the scenes with Industrial Light Magic model maker John Goodson to explore Ahsoka’s Jedi shuttle.'
  },
  {
    title: 'First Look: The New LEGO Star Wars UCS Venator-Class Republic Attack Cruiser',
    text: 'Lego Star Wars designer Hans Burkhard Schlömer takes StarWars.com inside the massive building set.',
    image: {
      lazy: true
    }
  }
]

onMounted(() => {
  const sliderElement = slider.value
  const sliderParams = {
    spaceBetween: 10,
    pagination: true,
    navigation: true
  }

  Object.assign(sliderElement, sliderParams)
  sliderElement.initialize()
})
</script>

<style scoped>
.hero-slider__slider::part(button-next),
.hero-slider__slider::part(button-prev) {
  color: var(--palette-white);
}

.hero-slider__slider::part(pagination) {
  --swiper-pagination-color: var(--palette-white);
  --swiper-pagination-bullet-inactive-color: var(--palette-white);
  --swiper-pagination-bullet-inactive-opacity: 1;
}

.hero-slider__slider::part(bullet-active) {
  transform: scale(1.25);
}

.hero-slider__slide {
  display: grid;
}

.hero-slider__content {
  position: relative;
  padding: 30px 60px;
  grid-area: 1 / 1;
}

.hero-slider__title {
  max-width: 750px;
  margin-bottom: 20px;
  font-size: 40px;
  text-transform: uppercase;
}

.hero-slider__description {
  max-width: 600px;
  font-size: 20px;
}

.hero-slider__image-wrapper {
  grid-area: 1 / 1;
}

@media (max-width: 767px) {
  .hero-slider__slider::part(button-next),
  .hero-slider__slider::part(button-prev) {
    display: none;
  }

  .hero-slider__slide {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  .hero-slider__content {
    padding: 0;
  }
}

@media (max-width: 600px) {
  .hero-slider__title {
    margin-bottom: 5px;
    font-size: 30px;
  }

  .hero-slider__slide {
    row-gap: 10px;
  }
}
</style>
