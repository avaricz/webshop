<template>
    <div class="flex flex-row items-start justify-center p-4 flex-1 ">
        <div class="flex justify-start gap-4 flex-wrap w-full">
            <StoreItem 
                v-for="item in shopItems" 
                :key="item.id"
                :item="item"
                @add-clicked="(item) => addItemToCart(item)"
                @decrease-clicked="(item) => decreaseItemFromCart(item)"
                :show-quantity-controls="true"
            />
        </div>
        <Transition name="slide">

            <div v-if="Object.keys(store.cart).length" class="sticky top-4 flex w-[360px] h-[500px] shrink-0 shadow-lg">
                <CartDetail 
                    @add-clicked="(item) => addItemToCart(item)"
                    @decrease-clicked="(item) => decreaseItemFromCart(item)"
                />
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

const store = useDataStore()

const shopItems = computed<StoreItemType[]>(() => store.storeItems)

const addItemToCart = (item: StoreItemType ):void => {
    const id = item.id.toString() 

    if (store.cart[id]) {
        store.cart[id].count += 1;
    } else {
        store.cart[id] = { ...item, count: 1 };
    }

    console.log(store.cart)
}

const decreaseItemFromCart = (item: StoreItemType):void => {

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