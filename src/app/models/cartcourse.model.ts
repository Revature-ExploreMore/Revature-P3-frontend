import { Cart } from "./cart.model";
import { Course } from "./course.model";

export interface CartCourse {
    id : number,
    cart : Cart,
    course : Course
}