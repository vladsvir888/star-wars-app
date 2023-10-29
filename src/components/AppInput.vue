<template>
  <sl-input
    class="input"
    :type="type ? type : 'text'"
    :label="label"
    :clearable="clearable"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @sl-clear="$emit('clear')"
  >
    <sl-icon :name="icon.name" :slot="icon.slot ? icon.slot : 'prefix'"></sl-icon>
  </sl-input>
</template>

<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import type { IInput } from '@/types'

defineProps<IInput>()
defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'clear'): void
}>()
</script>

<style scoped></style>
