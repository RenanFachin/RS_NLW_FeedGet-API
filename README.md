<h1 align="center">
  FeedGet - API em NODEJS
</h1>

<p align="center">
  <img alt="FeedBackWidget" src="https://i.imgur.com/PrwcsNB.png">
</p>

## O que é?
Esta edição do NLW propõem desenvolver um widget para colher feedback de usuários, podendo ser adicionado em qualquer aplicação web e mobile.<br>
Este widget vai permitir que o usuário envie uma screenchot diretamente ao corpo do envio.<br>

Esta API REST, nosso back-end, que apesar ser "pequeno", ele é criado apartir de tecnologias atuais e boas práticas. Nodejs, express, prisma, typescript e outras são algumas dessas tecnologias usadas e como boas práticas temos a implementação de alguns princípios do SOLID, buscando manter o código de maneira escalável e de facil manutenibilidade. Esta APIRest vai contar com apenas uma rota (endpoint), que é a rota de método POST para realizar a adição de um dado à uma tabela e, além disso, teremos um mecânica para realizar o envio de email para o gerenciador da aplicação para alerta-ló sobre novos feedbacks criados.<br>

Como foi utilizado o prisma, um ORM (Object Relational Mapper), temos a possibilidade de gerenciar as databases dos projetos, gerenciar as migrations e também o uma interface para visualizar o banco de dados. Se já nao bastasse todas estas featurea agregadas ao projeto, temos também os testes unitários automatizados com Jest na aplicação, que visam garantir, ainda em ambiente de desenvolvimento, uma aplicação livre de percausos na regra de negócio e assim garantir um deploy seguro.

## Funcionalidades
- [x] Um único endpoint para receber os dados oriundos do formulário do front-end
- [x] Envio de email para o adm da aplicação para quando houver um novo feedback, utilizando a biblitoeca nodemailer para isto

## Diagrama ERD
<div align="center">
    <img width="30%" alt="Diagrama ERD" src="./prisma/ERD.svg">
</div>

## Instalação
```bash
# Faça o clone do repositório
```

```bash
# Acesse a pasta do projeto pelo terminal
# Faça a instalação das depêndencias
  npm i
# Gere as tabelas com o prisma
  npx prisma migrate dev
# Execute o projeto em ambiente de desenvolvimento
  npm run dev
```

## Layout
- [Feedback Widget - Figma](https://www.figma.com/community/file/1102912516166573468)

- Back-end
  - [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Prisma](https://www.prisma.io/)
  - [Nodemailer](https://nodemailer.com/)
  - [Jest](https://jestjs.io/)
  - [SWC](https://swc.rs/)
  - [Cors](https://www.npmjs.com/package/cors)

## ✔️ Autores

- [Renan Fachin](https://github.com/RenanFachin/)

## 📄 Professores

- [Diego Fernandes](https://github.com/diego3g)

## 📄 Referência

- [Rockeseat](https://www.rocketseat.com.br/)