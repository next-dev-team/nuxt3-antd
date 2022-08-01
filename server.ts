import { log } from 'console'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Great Get success!' })
})

app.post('/', (req, res) => {
  console.log(req.headers)
  return (req.headers.customs && req.headers.name)
    ? res.status(200).send({ message: 'Great Post success!' })
    : res.status(400).send({ message: 'Bad Post request!' })
})

app.put('/', (req, res) => {
  return res.status(200).send({ message: 'Great Put success!' })
})

app.delete('/', (req, res) => {
  return res.status(200).send({ message: 'Great Delete success!' })
})

app.listen(port, () => {
  log(`Server is running on port ${port}`)
})
