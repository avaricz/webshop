<template>
    <div class="flex-grow ">
        <div class="flex flex-grow items-center justify-between px-4 h-24 bg-gray-900 text-white">
            <RouterLink to="/">
                <div class="text-xl">E-SHOP</div>
            </RouterLink>
            <TheNav />
        </div>

        <div class="flex bg-gray-100">
            <slot name="content" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TheNav from '@/components/TheNav.vue'
import { RouterLink } from 'vue-router';
</script>