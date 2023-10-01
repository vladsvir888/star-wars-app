<template>
  <sl-button class="button">
    <slot></slot>
  </sl-button>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/button/button.js'
</script>

<style scoped>
.button::part(base) {
  font-family: inherit;
}
</style>
