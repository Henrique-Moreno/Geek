import { Request, Response } from "express";
import { EditProductService } from "../../services/product/EditProductService";

class EditProductController {
    async handle(req: Request, res: Response) {

        const {id, name, price, decription} = req.body;

        const editProductService = new EditProductService();

        const product = await editProductService.execute({ id, name, price, decription });

        return res.json(product);

    }
}

export {EditProductController}