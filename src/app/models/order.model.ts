import { User } from "./user.model";

export interface Order {

    id: number,
    orderTimestamp: Date,
    orderTotal: number,
    user: User

}
