const express = require('express')

const app = express()

app.use(express.json())

app.get('/courses', (request, response) => {
  return response.json(['curso 1','curso 2', 'curso 3'])
})

app.post('/courses', (request, response) => {
  return response.json(['curso 1','curso 2', 'curso 3', 'curso 4'])
})

app.put('/courses/:id', (request, response) => {
  const param = request.params
  return response.json({'id_user_update':param})
})

app.patch('/courses/:id', (request, response) => {
  const param = request.params
  return response.json({'id_user_update_parcial':param})
})

app.delete('/courses/:id', (request, response) => {
  const param = request.params
  return response.json({'id_user_delete':param})
})

app.listen(3333)