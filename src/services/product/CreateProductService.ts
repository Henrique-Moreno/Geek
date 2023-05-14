import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    decription: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({name, price, decription, banner, category_id}: ProductRequest) {

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                decription: decription,
                banner: banner,
                category_id: category_id
            }
        })

        return product;

    }
}

export {CreateProductService}