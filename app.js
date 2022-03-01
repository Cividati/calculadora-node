const express = require('express')
const app = express()
const port = 3000
const Calculadora = require('./calculadora')

app.get('/', (req, res) => {
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

  html='README.md'
  res.send(html)
})

app.get('/sum', (req, res) => {
  
  res.send(Calculadora.calculate(req, res))
})

app.get('/sub', (req, res) => {
  
  res.send(Calculadora.calculate(req, res))
})

app.get('/div', (req, res) => {
  
  res.send(Calculadora.calculate(req, res))
})

app.get('/mul', (req, res) => {
  
  res.send(Calculadora.calculate(req, res))
})

app.get('/pot', (req, res) => {
  
  res.send(Calculadora.calculate(req, res))
})

app.get('/rad', (req, res) => {
  
  res.send(Calculadora.calculate(req, res))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})