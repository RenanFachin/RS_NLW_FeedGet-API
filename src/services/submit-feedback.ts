import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackRequest {
    // Quais dados são necessários para fazer um feedback
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedback {
    constructor(
        private feedbacksRepository: FeedbacksRepository
    ) {}

    async execute(request: SubmitFeedbackRequest){
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })
    }
}