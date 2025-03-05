<template>
    <div class="flex flex-col gap-2 overflow-hidden items-center p-4 shadow-xs hover:shadow-xl group transition duration-300 ease-in-out bg-white">
        <div class="w-32 h-32 overflow-hidden">
            <img :src="item?.picture" :alt="item?.name" width="100%" height="100%" class="group-hover:scale-[1.05] transition  duration-300 ease-in-out">
        </div>
        <div>{{ item?.name }}</div>
        <div>{{ item?.price }},-</div>
        <div class="flex flex-col w-full justify-center max-w-32">
            <div 
                v-if="showQuantityControls" 
                class="flex justify-between items-center"
            >
                <TheButton 
                    label="-"
                    @on-click="$emit('decreaseClicked', item)"
                    onkeyup
                />
                <div>{{ quantity }}</div>
                <TheButton 
                    label="+"
                    @on-click="$emit('addClicked', item)"
                    onkeyup
                />
            </div>
            
            <TheButton
                v-else
                label="Add to cart" 
                filled
                @on-click="$emit('addClicked', item)"
                onkeyup
            />

        </div>
    </div>
</template>

<script setup lang="ts">
import type { StoreItem } from '@/types/types';
import type { PropType } from 'vue';
import TheButton from './TheButton.vue';

const props = defineProps({
    item: Object as PropType<StoreItem>,
    showQuantityControls: {
        type: Boolean,
        required: false,
        default: false
    },
    quantity: {
        type: Number,
        // validator (v: number): boolean {
        //     if (this.showQuantityControls && !v) {
        //         return false
        //     }
        //     return true
        // }
    }
})

defineEmits(['addClicked', 'decreaseClicked'])
</script>