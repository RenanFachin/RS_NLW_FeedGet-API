import express from 'express'
import { prisma } from './prisma';
import nodemailer from 'nodemailer'
import { SubmitFeedback } from './services/submit-feedback';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP
    }
});

routes.post('/feedbacks', async (request, response) => {
    const { type, comment, screenshot } = request.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedback(prismaFeedbacksRepository) 

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    // Enviando um email para o adm
    // await transport.sendMail({
    //     from: 'Equipe Feedget <oi@feedget.com>',
    //     to: 'Renan <teste@feedget.com>',
    //     subject: 'Novo feedback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
    //         `<p style="color: #996DFF">Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`
    //     ].join('\n'),
    // })

    return response.status(201).send()
})
