import { Course } from "./course.model";
import { Order } from "./order.model";

export interface OrderCourseSet {

    order: Order,
    courses: Course[]
}