import express from 'express'
import { SubmitFeedback } from './services/submit-feedback';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()

routes.post('/feedbacks', async (request, response) => {
    const { type, comment, screenshot } = request.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedback(
        prismaFeedbacksRepository, 
        nodemailerMailAdapter
    ) 


    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })


    return response.status(201).send()


})
