import prismaClient from "../../prisma";

interface ContactRequest {
    name: string;
    decription: string
}

class ConctactService {
    async execute({ name, decription}: ContactRequest) {

        const contact = await prismaClient.contact.create({
            data: {
                name: name,
                decription: decription
            }
        })
        return contact;
    }
}

export {ConctactService}