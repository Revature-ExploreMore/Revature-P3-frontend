import { Category } from "./category.model"

export interface Course {
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string
    category: Category
}