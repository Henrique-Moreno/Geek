import prismaClient from "../../prisma";

interface ExcluiProduct {
    id: string
}

class ExcluiProdtctService {
    async execute({id}: ExcluiProduct) {

        const product = await prismaClient.product.delete({
            where: {
                id: id
            }
        })
        return product;

    }
}

export {ExcluiProdtctService}