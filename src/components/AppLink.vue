<template>
  <!-- default prop "to" need -->
  <RouterLink to="/" class="link">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  font-weight: 700;
}
.link--hover {
  transition: color var(--transition300ms);
}

.link--hover:hover {
  color: var(--sl-color-primary-600);
}

.link--decoration {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.router-link-active {
  color: var(--sl-color-primary-600);
}
</style>
