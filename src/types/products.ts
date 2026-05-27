
type Category = "Entrada" | "Prato Principal" | "Sushi" | "Sobremesa" | "Bebida";

export interface Product {

    id: string,
    name: string,
    description: string,
    price: number,
    category: Category,
    image: string,
}