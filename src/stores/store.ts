import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import apiMethods from '@/api/api'
import type { StoreItem, CartItem } from '@/types/types'

const { getData } = apiMethods

export const useDataStore = defineStore('dataStore', () => {

  const _storeItems = ref<StoreItem[]>([])
  const storeItems = computed<StoreItem[]>(() => _storeItems.value)

  const cart = ref<Record<string, CartItem>>({})
  const cartItemsCount = computed(() => {
      return Object.values(cart.value).reduce((acc, cur) => {
          return acc + cur.count
      }, 0)
  })

  const fetchStoreItems = async () => {
    try {

      const data = await getData() as StoreItem[]
      _storeItems.value = data
     
      return data

    } catch (error) {
      console.log(error)
      return []
    }
  }

  return { 
    storeItems,
    cart,
    cartItemsCount,

    fetchStoreItems
   }
})
