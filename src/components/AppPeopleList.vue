<template>
  <!-- todo: add error -->
  <div v-if="error">Error...</div>
  <div v-else-if="data" class="people-list-wrap">
    <AppPagination
      :pagination="{
        previous: data.previous ? getIdFromString(data.previous, /\d+/) : null,
        next: data.next ? getIdFromString(data.next, /\d+/) : null
      }"
      @pagination-click="(num) => (id = num)"
    />
    <ul class="people-list">
      <li v-for="person in data.results" :key="person.name" class="people-list__item">
        <AppPersonCard :person="{ ...person, index: getIdFromString(person.url, /\d+/) }" />
      </li>
    </ul>
  </div>
  <AppSpinner v-else />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '@/hooks/fetch'
import { getIdFromString } from '@/utils/getIdFromString'
import { API_BASE_URL } from '@/constants'
import AppPersonCard from '@/components/AppPersonCard.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppSpinner from '@/components/AppSpinner.vue'

const id = ref('1')
const url = computed(() => `${API_BASE_URL}/people/?page=${id.value}`)
const { data, error } = await useFetch(url)
</script>

<style scoped>
.people-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
</style>
