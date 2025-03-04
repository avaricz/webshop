<template>
    <div class="flex p-1 items-center">
        <div class="flex p-2 gap-4">

            <RouterLink 
            v-for="link in navigationItems"
            activeClass="underline" 
            :to="link.to"
            > 
            {{ link.label }}
        </RouterLink>
    </div>
        <RouterLink :to="{name: 'cart'}">
            <div class="flex w-6 h-6 rounded-full items-center justify-center text-xs text-black bg-gray-300">{{ store.cartItemsCount }}</div>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router' 
import {ref} from 'vue'
import { useDataStore } from '@/stores/store'

const store = useDataStore()

const navigationItems = ref([
    {
        to: { name: "store" },
        label: "Store"
    },
    {
        to: { name: "cart" },
        label: "Cart"
    },
])


</script>