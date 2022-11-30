import express from 'express'
import { type } from 'os'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

app.post('/feedbacks', async (request, response) => {
    const {type, comment, screenshot} = request.body

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    return response.status(201).json({data: feedback})
})


const PORT = 3333
app.listen(PORT, () => {
    console.log(`HTTP server running at port ${PORT}`)
})