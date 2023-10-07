<template>
  <sl-input
    class="input"
    :type="type ? type : 'text'"
    :label="label"
    :clearable="clearable"
    :help-text="helpText"
    :disabled="disabled"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @sl-clear="$emit('clear')"
  >
    <sl-icon :name="icon.name" :slot="icon.slot ? icon.slot : 'prefix'"></sl-icon>
  </sl-input>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'

defineProps({
  type: String,
  label: String,
  clearable: Boolean,
  icon: Object,
  helpText: String,
  disabled: Boolean,
  modelValue: String
})

defineEmits(['update:modelValue', 'clear'])
</script>

<style scoped></style>
