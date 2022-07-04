import { Course } from "./course.model";
import { Order } from "./order.model";

export interface OrderCourse{
  id: number,
  order: Order,
  course: Course

}
