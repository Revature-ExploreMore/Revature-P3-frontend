import { Cart } from "./cart.model";
import { Course } from "./course.model";

export interface CartCourseDetails {
    id: number,
    cart: Cart,
    course: Course,

}