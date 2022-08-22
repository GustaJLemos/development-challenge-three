import { Category } from "./Category";

export type ItemList = {
    id: number,
    text: string;
    image: JSX.Element;
    category: Category;
}
