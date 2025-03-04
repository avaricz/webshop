<template>
    <div class="flex flex-1 p-4 ">
        <div class="flex flex-col flex-1 gap-4">
            <CartItem 
                v-for="item in cartItems"
                :key="item.id"
                :item="item"
            />
            <div>cena</div>
         </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDataStore } from '@/stores/store';
import CartItem from '@/components/CartItem.vue';

const store = useDataStore()

const cartItems = computed(() => {
    return Object.values(store.cart)
})

</script>