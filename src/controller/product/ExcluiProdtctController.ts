import { Request, Response } from "express";
import { ExcluiProdtctService } from "../../services/product/ExcluiProdtctService";

class ExcluiProdtctController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const excluiProduct = new ExcluiProdtctService();

        const product = await excluiProduct.execute({id});

        return res.json(product)
    }
}

export {ExcluiProdtctController}