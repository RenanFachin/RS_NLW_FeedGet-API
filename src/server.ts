import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(cors()) // habilitando o back-end para fornecer os dados para front-ends
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`HTTP server running at port ${PORT}`)
})