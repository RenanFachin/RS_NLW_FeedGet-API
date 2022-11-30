import nodemailer from 'nodemailer'

import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP
    }
});


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: sendMailData){
    // Enviando um email para o adm
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Renan <teste@feedget.com>',
        subject: subject,
        html: body,
    })
    }
}