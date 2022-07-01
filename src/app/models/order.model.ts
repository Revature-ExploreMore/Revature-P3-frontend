import { User } from "./user.model";

export interface Order {

    orderId: number,
    orderTimestamp: Date,
    orderTotal: number,
    user: User

}
