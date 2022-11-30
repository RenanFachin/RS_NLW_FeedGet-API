import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.USER_MAILTRAP,
      pass: process.env.PASS_MAILTRAP
    }
  });


app.post('/feedbacks', async (request, response) => {
    const {type, comment, screenshot} = request.body

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    // Enviando um email para o adm
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Renan <teste@feedget.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
            `<p style="color: #996DFF">Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n'),
    })

    return response.status(201).json({data: feedback})
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`HTTP server running at port ${PORT}`)
})