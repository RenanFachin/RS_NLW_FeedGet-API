import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackRequest {
    // Quais dados são necessários para fazer um feedback
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedback {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdpter: MailAdapter
    ) { }

    async execute(request: SubmitFeedbackRequest) {
        const { type, comment, screenshot } = request;

        // Usando o repository para criar
        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        // Usando o adpter para enviar o email
        await this.mailAdpter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
                `<p style="color: #996DFF">Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}