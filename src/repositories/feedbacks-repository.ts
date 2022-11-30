// Este arquivo vai dizer quais as operações no banco de dados mas não é quem implementar. Quem vai implementar é o prisma-feedbacks-repository


export interface FeedbackCreateData{
    // Declarando o que é necessário para se criar um novo feedback
    type: string;
    comment: string;
    screenshot?: string;
}


export interface FeedbacksRepository {
    // Métodos que vão existir, ou seja, as ações que são possíveis de se fazer com o db
    create: (data: FeedbackCreateData) => Promise<void>; // Promise<void> é por que é assincrona
}

// data: FeedbackCreateData é para dizer o que será recebido como parâmetro