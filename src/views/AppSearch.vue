<template>
  <div class="search">
    <div class="container">
      <h1>Search</h1>
      <AppInput
        class="search__input"
        v-model="searchStore.searchText"
        @input="searchStore.debouncedFetch"
        label="Search"
        clearable
        :disabled="!searchStore.data"
        :icon="{
          name: 'search'
        }"
        @clear="searchStore.searchText = ''"
      />
      <div class="search__content">
        <AppAlert
          v-if="searchStore.error"
          variant="danger"
          :closable="true"
          icon="exclamation-octagon"
          :text="API_TEXT_ERROR"
        />
        <template v-else-if="searchStore.data">
          <AppCardList
            title="Found people"
            :data="searchStore.data.results"
            :is-item-link="true"
            class="search__card"
          />
        </template>
        <AppSpinner v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore'
import { API_TEXT_ERROR } from '@/constants'
import AppInput from '@/components/AppInput.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppCardList from '@/components/AppCardList.vue'
import AppAlert from '@/components/AppAlert.vue'

const searchStore = useSearchStore()
</script>

<style scoped>
.search__input {
  max-width: 300px;
}

.search__input::part(form-control-help-text) {
  color: var(--palette-white);
  font-size: 12px;
}

.search__content {
  max-width: 500px;
  margin-top: 20px;
}

.search__card {
  width: 100%;
}
</style>
