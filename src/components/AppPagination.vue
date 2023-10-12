<template>
  <div class="pagination">
    <AppButton
      class="pagination__button"
      :disabled="!previous"
      @click="$emit('pagination-click', previous)"
    >
      <sl-icon class="pagination__icon" name="arrow-left" slot="prefix"></sl-icon>
      Previous
    </AppButton>
    <AppButton
      class="pagination__button"
      :disabled="!next"
      @click="$emit('pagination-click', next)"
    >
      <sl-icon class="pagination__icon" name="arrow-right" slot="suffix"></sl-icon>
      Next
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import type { IPagination } from '@/types'
import AppButton from '@/components/AppButton.vue'

defineProps<IPagination>()

defineEmits<{
  (e: 'pagination-click', value: string | null): void
}>()
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  margin-bottom: 20px;
}

.pagination__icon {
  font-size: 20px;
}
</style>
