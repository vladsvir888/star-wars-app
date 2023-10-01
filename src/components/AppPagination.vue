<template>
  <div class="pagination">
    <AppIconButton
      name="arrow-left"
      label="Previous"
      class="pagination__button"
      :disabled="!pagination.previous"
      @click="$emit('pagination-click', pagination.previous)"
    ></AppIconButton>
    <AppIconButton
      name="arrow-right"
      label="Next"
      class="pagination__button"
      :disabled="!pagination.next"
      @click="$emit('pagination-click', pagination.next)"
    ></AppIconButton>
  </div>
</template>

<script setup>
import AppIconButton from '@/components/AppIconButton.vue'

defineProps({
  pagination: Object
})
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  margin-bottom: 12px;
}

.pagination__button {
  font-size: 35px;
  color: currentColor;
}

.pagination__button::part(base) {
  padding: 0;
}
</style>
