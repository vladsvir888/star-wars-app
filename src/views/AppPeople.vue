<template>
  <div class="people">
    <div class="container">
      <h1>People</h1>
      <AppAlert
        v-if="error"
        :alert="{
          variant: 'danger',
          closable: true,
          icon: 'exclamation-octagon',
          text: API_TEXT_ERROR
        }"
      />
      <div v-else-if="data" class="people__wrap">
        <AppPagination
          :pagination="{
            previous: data.previous ? getIdByRegex(data.previous, /\d+/) : null,
            next: data.next ? getIdByRegex(data.next, /\d+/) : null
          }"
          @pagination-click="(num) => (id = num)"
        />
        <ul class="people__list">
          <li v-for="person in data.results" :key="person.name" class="people-list__item">
            <AppPersonCard :person="{ ...person, idx: getIdByRegex(person.url, /\d+/) }" />
          </li>
        </ul>
      </div>
      <AppSpinner v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/fetch.js'
import { getIdByRegex } from '@/utils/getIdByRegex.js'
import { API_BASE_URL, API_TEXT_ERROR } from '@/constants'
import AppPersonCard from '@/components/AppPersonCard.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppAlert from '@/components/AppAlert.vue'

const id = ref('1')
const url = computed(() => `${API_BASE_URL}/people/?page=${id.value}`)
const { data, error } = await useFetch(url)
</script>

<style scoped>
.people__list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}

@media (max-width: 600px) {
  .people__list {
    display: block;
  }

  .people__list > *:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
