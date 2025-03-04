export interface StoreItem {
    id: number,
    name: string,
    price: number,
    picture: string
}

export interface CartItem extends StoreItem {
    count: number
}