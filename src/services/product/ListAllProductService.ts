import prismaClient from "../../prisma";

class ListAllProductService {
    async execute() {

        const product = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                banner: true,
                decription: true,
                category_id: true
            }
        })
        return product;

    }
}

export {ListAllProductService}