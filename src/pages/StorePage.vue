<template>
    <div class="flex flex-row items-start justify-center p-4 flex-1 gap-4">
        <div class="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                max-w-screen-2xl mx-auto auto-rows-fr">
            <StoreItem 
                v-for="item in shopItems" 
                :key="item.id"
                :item="item"
                @add-clicked="(item) => addItemToCart(item)"
                @decrease-clicked="(item) => decreaseItemFromCart(item)"
                :show-quantity-controls="!!store.cart[item.id]"
                :quantity="store.cart[item.id]?.count"
            />
        </div>

        <Transition name="slide">
            <div v-if="Object.keys(store.cart).length" class="sticky top-4 hidden md:flex w-[360px] h-[500px] shrink-0 shadow-lg">
                <CartDetail 
                    @add-clicked="(item) => addItemToCart(item)"
                    @decrease-clicked="(item) => decreaseItemFromCart(item)"
                />
            </div>
        </Transition>

        <Transition name="slide">
            <div v-if="Object.keys(store.cart).length" class="fixed bottom-4 right-4  flex flex-col  w-24 h-24 bg-white md:hidden shadow-lg border border-blue-500">
                <div class="flex flex-1 items-center justify-center text-xl ">
                    {{ store.cartItemsCount }}
                </div>

                <RouterLink :to="{name: 'cart'}" class=" flex items-center justify-center py-1 px-4 border-blue-500 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-400 active:border-blue-400">
                To cart
                <!-- <TheButton label="To Cart" filled /> -->
            </RouterLink>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useDataStore } from '@/stores/store';
import StoreItem from '@/components/StoreItem.vue';
import type { StoreItem as StoreItemType } from '@/types/types';
import CartDetail from '@/components/CartDetail.vue';
import TheButton from '@/components/TheButton.vue';

const store = useDataStore()
const shopItems = computed<StoreItemType[]>(() => store.storeItems)

const addItemToCart = (item: StoreItemType ):void => {
    const id = item.id.toString() 

    if (store.cart[id]) {
        store.cart[id].count += 1;
    } else {
        store.cart[id] = { ...item, count: 1 };
    }
}

const decreaseItemFromCart = (item: StoreItemType):void => {
    const id = item.id.toString()

    if (store.cart[id].count < 2) {
        delete store.cart[id]
    } else {
        store.cart[id].count -= 1;
    }
}

onMounted(() => {
    store.fetchStoreItems()
})
</script>
<style scoped>
.slide-enter-active {
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-leave-active {
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>