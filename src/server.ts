import express from 'express'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`HTTP server running at port ${PORT}`)
})