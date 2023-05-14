import { Request, Response } from "express";
import { DeitailUserService } from "../../services/user/DeitailUserService";

class DeitailUserController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id;

        const deitailUserService = new DeitailUserService();

        const user = await deitailUserService.execute(user_id);

        return res.json(user);
    }
}

export {DeitailUserController}