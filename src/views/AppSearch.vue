<template>
  <div class="search">
    <div class="container">
      <h1>Search</h1>
      <AppInput
        class="search__input"
        v-model="searchText"
        @input="debouncedFetch"
        label="Search"
        type="search"
        clearable
        :disabled="!data"
        :icon="{
          name: 'search'
        }"
        @clear="searchText = ''"
      />
      <div class="search__content">
        <AppAlert
          v-if="error"
          :alert="{
            variant: 'danger',
            closable: true,
            icon: 'exclamation-octagon',
            text: API_TEXT_ERROR
          }"
        />
        <template v-else-if="data">
          <AppCardList
            title="Found people"
            :data="data.results"
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
import { debounce } from 'lodash-es'
import { ref, computed, watch } from 'vue'
import { fetchData } from '@/utils/fetch.js'
import { API_BASE_URL, API_TEXT_ERROR } from '@/constants'
import AppInput from '@/components/AppInput.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import AppCardList from '@/components/AppCardList.vue'
import AppAlert from '@/components/AppAlert.vue'

const data = ref(null)
const error = ref<Error | null>(null)
const searchText = ref('')
const url = computed(() => `${API_BASE_URL}/people/?search=${searchText.value}`)
const debouncedFetch = debounce(async () => {
  data.value = null

  try {
    data.value = await fetchData(url.value)

    console.log(data.value, 'data.value');
  } catch (err) {
    if (err instanceof Error) {
      error.value = err
    }
  }
}, 750)

watch(url, () => debouncedFetch(), { immediate: true })
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
