<template>
    <div  
        class="flex items-center gap-4"
    >
        <div class="flex px-4 items-center justify-center "><TheButton label="X" rounded/></div>
        <div class="flex w-24 h-24">
            <img :src="item.picture" alt="" width="100%" height="100%">
        </div>
        <div>{{ item.name }}</div>
    </div>
</template>

<script setup lang="ts">
import type { CartItem } from '@/types/types';
import TheButton from './TheButton.vue';
defineProps({
    item: Object as CartItem
})
</script>

<style scoped>

</style>