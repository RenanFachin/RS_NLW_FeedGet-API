import express from 'express'

const app = express()


const PORT = 3333
app.listen(PORT, () => {
    console.log(`HTTP server running at port ${PORT}`)
})