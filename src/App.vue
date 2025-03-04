<template>
  <DefaultLayout>
    <template #content>
      <RouterView />
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from '@/views/DefaultLayout.vue'
</script>

