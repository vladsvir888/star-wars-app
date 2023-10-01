<template>
  <div class="people">
    <div class="container">
      <h1>People</h1>
      <Suspense>
        <AppPeopleList />

        <!-- todo: try to solve why it doesn't work... -->
        <!-- <template #fallback>
          <AppSpinner />
        </template> -->
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import AppPeopleList from '@/components/AppPeopleList.vue'
// import AppSpinner from '@/components/AppSpinner.vue'
</script>

<style scoped></style>
