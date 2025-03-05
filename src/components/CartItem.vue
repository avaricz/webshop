<template>
    <div  
        class="flex flex-wrap items-center justify-between gap-4 bg-white p-4 shadow-xs hover:shadow-lg transition-all duration-300 "
    >
        <div class="flex items-center gap-4">

            <div class="flex px-4 items-center justify-center ">
                <TheButton
                label="X"
                rounded @on-click="$emit('onRemove')" 
                onkeyup
                />
            </div>

            <div class="flex w-24 h-24">
                <img :src="item.picture" alt="" width="100%" height="100%">
            </div>
            <div>{{ item.name }}</div>
        </div>

        <div class="flex gap-8 flex-1 items-center justify-end">
            <div class="flex flex-col items-center">
                <div>quantity</div>
                <div>{{ item.count }} x</div>

            </div>

            <div class="flex flex-col items-center">
                <div>price</div>
                <div>
                    {{ item.price }},-
                </div>
            </div>

            <div class="flex flex-col items-center whitespace-nowrap">
                <div>Total price</div>
                <div>{{ item.price * item.count }},-</div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { CartItem } from '@/types/types';
import TheButton from './TheButton.vue';
import type { PropType } from 'vue';

defineEmits(['onRemove'])

defineProps({
    item:  {
        type: Object as PropType<CartItem>,
        required: true
    }
})
</script>