<template>
  <!-- todo: add error -->
  <div v-if="error">Error...</div>
  <div v-else-if="data" class="people-list-wrap">
    <AppPagination
      :pagination="{
        previous: data.previous ? getIdFromUrl(data.previous, /\d+/) : null,
        next: data.next ? getIdFromUrl(data.next, /\d+/) : null
      }"
      @pagination-click="(num) => (id = num)"
    />
    <ul class="people-list">
      <li v-for="person in data.results" :key="person.name" class="people-list__item">
        <AppPersonCard :person="person" />
      </li>
    </ul>
  </div>
  <AppSpinner v-else />
</template>

<script setup>
import { ref, computed } from 'vue'
import AppPersonCard from '@/components/AppPersonCard.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import { useFetch } from '@/hooks/fetch'
import { API_BASE_URL } from '@/constants'

const id = ref('1')
const url = computed(() => `${API_BASE_URL}/people/?page=${id.value}`)
const { data, error } = await useFetch(url)

function getIdFromUrl(str, regex) {
  const match = str.match(regex)

  return match ? match[0] : null
}
</script>

<style scoped>
.people-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
</style>
