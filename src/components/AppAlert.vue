<template>
  <sl-alert class="alert" :variant="variant" :closable="closable" open>
    <sl-icon slot="icon" :name="icon"></sl-icon>
    {{ text }}
  </sl-alert>
</template>

<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/alert/alert.js'
import type { IAlert } from '@/types'

defineProps<IAlert>()
</script>

<style scoped>
.alert::part(base) {
  max-width: 400px;
}
</style>
