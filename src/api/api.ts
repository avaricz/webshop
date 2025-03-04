import data from '@/data/shop-items.json'

export default {
    async getData() {
        return new Promise(resolve => {
            setTimeout(() => {
              resolve(data)
            }, 1000);
        })
    }
}