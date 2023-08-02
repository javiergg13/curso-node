const express = require('express')
const app = express()
const ditto = require('./pokemon/ditto.json')
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

// middleware reusable en cualquier post
app.use(express.json())

/* app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    req.body = data
    next()
  })
}) */

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>Error 404: No se ha encontrado la página</h1>')
})

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`)
})
