import express from 'express'
const app = express()
const port = 3333

//usar json post
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/feedbacks', (req, res) => console.log(req.body))
app.listen(port, () => console.log(`HTTP server running on port ${port}!`)) 