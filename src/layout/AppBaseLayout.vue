<template>
  <div>
    <AppAlert
      v-if="error"
      variant="danger"
      :closable="true"
      icon="exclamation-octagon"
      :text="API_TEXT_ERROR"
    />
    <slot />
    <AppSpinner v-if="loading" />
  </div>
</template>

<script setup lang="ts">
import { API_TEXT_ERROR } from '@/constants'
import AppSpinner from '@/components/AppSpinner.vue'
import AppAlert from '@/components/AppAlert.vue'

defineProps<{
  error: Error | null
  loading: boolean
}>()
</script>

<style scoped></style>
