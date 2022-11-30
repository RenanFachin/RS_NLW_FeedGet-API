import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({type,comment,screenshot}: FeedbackCreateData){
        // Aqui estará a operação de criação do feedback
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}