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
        :icon="{
          name: 'search'
        }"
        @clear="searchStore.searchText = ''"
      />
      <div class="search__content">
        <component
          :is="$route.meta.layout || 'div'"
          :error="searchStore.error"
          :loading="searchStore.loading"
        >
          <AppCardList
            v-if="searchStore.data"
            title="Found people"
            :data="searchStore.data.results"
            :is-item-link="true"
            class="search__card"
          />
        </component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore'
import AppInput from '@/components/AppInput.vue'
import AppCardList from '@/components/AppCardList.vue'

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
