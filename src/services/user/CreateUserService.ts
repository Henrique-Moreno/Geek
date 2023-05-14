import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    email: string;
    password: string;
}

class CreateUserService {
    async execute({email, password}: UserRequest) {

        if(!email) {
            throw new Error("Email incorrent")

        }

        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExist) {
            throw new Error("User already exists")
        }

        const passwordHast = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                email: email,
                password: passwordHast,
            }, 
            select: {
                id: true,
                email: true,
            }
        })

        return user;
    }
}

export {CreateUserService}