<template>
    <div class="flex flex-1 flex-col gap-4 p-4 bg-white">
        <div class="flex justify-center bg-gray-900 text-white">Cart</div>
        <div class="flex-1 overflow-auto">
            <div 
                v-for="(item, index) in cartArray"
                :key="index"
                class="flex justify-between border-b-[.5px] border-gray-400 pb-4"
            >   

            <div class="flex items-center gap-2">
                <div>{{ index + 1 }}.</div>
                <div>{{ item.name }}</div>
            </div>

                <div class="flex gap-4 items-center">
                    <TheButton 
                        label="-"
                        @on-click="$emit('decreaseClicked', item)"
                        onkeyup
                    />

                    <div>{{ item.count }}</div>

                    <TheButton 
                        label="+"
                        @on-click="$emit('addClicked', item)"
                        onkeyup
                    />
                </div>
            </div>
        </div>
        <div class="flex justify-center justify-self-end">
            <RouterLink :to="{name: 'cart'}" >
                <TheButton label="To Cart" filled/>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/store';
import { computed } from 'vue';
import TheButton from './TheButton.vue';
import { RouterLink } from 'vue-router';

defineEmits(['decreaseClicked', 'addClicked'])

const store = useDataStore()
const cartArray = computed(() => Object.values(store.cart))
</script>