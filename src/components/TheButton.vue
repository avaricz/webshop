<template>
    <button 
        class="border py-1 px-4 cursor-pointer "
        :class="{ 
            'border-blue-500 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-400 active:border-blue-400' : filled,
            'border-gray-200 text-black bg-gray-200 hover:bg-gray-300 active:bg-gray-100 active:border-gray-100 ' : !filled,
            'flex rounded-[100%] p-0 w-8 h-8 items-center justify-center': rounded
        }"
        @click.stop="$emit('onClick')"
    >
        {{ label }}
    </button>
</template>

<script setup lang="ts">
    defineProps({
        label: String,
        filled: Boolean,
        rounded: Boolean
    })

    defineEmits(['onClick'])
</script>