import { Category } from "./category.model"

export interface Course {
    id: number,
    name: string,
    description: string,
    price: number,
    image_url: string
    category: Category
}