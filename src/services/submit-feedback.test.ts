import { SubmitFeedback } from "./submit-feedback"

// Criando uma função spy para saber se a função foi chamada
const createFeedbackSpy = jest.fn();
const sendMailSpy= jest.fn();


const submitFeedback = new SubmitFeedback(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    // Criando um teste apenas para validar se o feedback consegue ser submetido 
    test('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,testandoJEST'
        })).resolves.not.toThrow()

        // testando com o spy para testar se foi chamada a função
        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()

    })

    // Criando um teste para mostrar um erro ao ser enviado um feedback sem type
    test('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,testandoJEST'
        })).rejects.toThrow()
    })

    // Criando um teste para mostrar um erro ao ser enviado um feedback sem comment
    test('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,testandoJEST'
        })).rejects.toThrow()
    })

    // Criando um teste para mostrar um erro ao ser enviado um feedback com uma screenshot de formato inválido
    test('should not be able to submit a feedback with an invalid screenshot format', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'teste.jpg'
        })).rejects.toThrow()
    })
})