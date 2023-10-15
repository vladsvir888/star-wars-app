<template>
  <div class="people">
    <div class="container">
      <h1>People</h1>
      <AppAlert
        v-if="peopleStore.error"
        variant="danger"
        :closable="true"
        icon="exclamation-octagon"
        :text="API_TEXT_ERROR"
      />
      <div v-if="peopleStore.data" class="people__wrap">
        <AppPagination
          :previous="
            peopleStore.data.previous ? getIdByRegex(peopleStore.data.previous, /\d+/) : null
          "
          :next="peopleStore.data.next ? getIdByRegex(peopleStore.data.next, /\d+/) : null"
          @pagination-click="(num) => (peopleStore.id = num as string)"
        />
        <ul class="people__list">
          <li
            v-for="person in peopleStore.data.results"
            :key="person.name"
            class="people-list__item"
          >
            <AppPersonCard :name="person.name" :id="getIdByRegex(person.url, /\d+/)" />
          </li>
        </ul>
      </div>
      <AppSpinner v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePeopleStore } from '@/stores/peopleStore'
import { getIdByRegex } from '@/utils/getIdByRegex'
import { API_TEXT_ERROR } from '@/constants'
import AppPersonCard from '@/components/AppPersonCard.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppAlert from '@/components/AppAlert.vue'

const peopleStore = usePeopleStore()
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
