import prismaClient from "../../prisma";

interface EditRequest {
    id: string;
    name: string;
    price: string;
    decription: string
}

class EditProductService {
    async execute({id, name, price, decription}: EditRequest) {
        const product = await prismaClient.product.update({
            where: {
                id: id
            },
            data: {
                name: name,
                price: price,
                decription: decription
            }
        })
        return product;

    }
}

export {EditProductService}