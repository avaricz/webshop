<template>
    <div class="flex flex-1 items-stratch md:items-start gap-4 p-4 flex-col md:flex-row ">
        <div class="flex flex-col flex-1 gap-4 ">
            <CartItem 
                v-if="cartItems.length"
                v-for="item in cartItems"
                :key="item.id"
                :item="item"
                @on-remove="removeItemFromCart(item.id)"
            />
            <div v-else class="flex items-center justify-center">No items have been selected for the cart.</div>
        </div>
        <div class="flex justify-center md:sticky md:top-4">
            <div class="flex flex-col self-center  items-center  justify-between  w-40 h-40 p-2 shadow-lg bg-white">
                <div>
                    Total price
                </div>
                <div>{{ totalPrice }},-</div>
                <div><TheButton label="Buy" filled/></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDataStore } from '@/stores/store';
import CartItem from '@/components/CartItem.vue';
import TheButton from '@/components/TheButton.vue';

const store = useDataStore()

const cartItems = computed(() => Object.values(store.cart))

const totalPrice = computed(() => cartItems.value.reduce((acc, cur) => acc + (cur.count * cur.price), 0))

const removeItemFromCart = (itemId: number): void => {
    delete store.cart[itemId]
}

</script>