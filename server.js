
import express from 'express'
import { renderHomePage } from './views/index.js'

const app = express()
const port = 8888


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send(renderHomePage())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

