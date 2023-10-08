<template>
  <sl-alert class="alert" :variant="alert.variant" :closable="alert.closable" open>
    <sl-icon slot="icon" :name="alert.icon"></sl-icon>
    {{ alert.text }}
  </sl-alert>
</template>

<script setup lang="ts">
import type { IAlert } from '@/types';
import '@shoelace-style/shoelace/dist/components/alert/alert.js'

defineProps<{
  alert: IAlert
}>()
</script>

<style scoped>
.alert::part(base) {
  max-width: 400px;
}
</style>
