<template>
  <div class="pagination">
    <AppButton
      class="pagination__button"
      :disabled="!pagination.previous"
      @click="$emit('pagination-click', pagination.previous)"
    >
      <sl-icon class="pagination__icon" name="arrow-left" slot="prefix"></sl-icon>
      Previous
    </AppButton>
    <AppButton
      class="pagination__button"
      :disabled="!pagination.next"
      @click="$emit('pagination-click', pagination.next)"
    >
      <sl-icon class="pagination__icon" name="arrow-right" slot="suffix"></sl-icon>
      Next
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue'

defineProps({
  pagination: Object
})
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
