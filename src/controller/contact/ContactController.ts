import { Request, Response } from "express";
import { ConctactService } from "../../services/contact/ConctactService";

class ContactController {
    async handle(req: Request, res: Response) {

        const {name, decription} = req.body;

        const conctactService = new ConctactService();

        const contact = await conctactService.execute({ name, decription });

        return res.json(contact);

    }
}

export {ContactController}