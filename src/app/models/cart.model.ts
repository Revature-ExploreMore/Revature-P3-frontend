export interface Cart {
    id: number,
    created_at: any,
    modified_at: any,
    cart_total: number,
    is_removed: boolean,    
    user_id: number,
    order_id: number
}